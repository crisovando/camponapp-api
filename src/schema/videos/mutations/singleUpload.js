import shortid from 'shortid';
import ffmpeg from 'fluent-ffmpeg';
import ffprobeStatic from 'ffprobe-static';
import mkdirp from 'mkdirp';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import { bucket, db } from '../../../../services/connectors';

ffmpeg.setFfmpegPath(ffmpegPath.path);
ffmpeg.setFfprobePath(ffprobeStatic.path);
const UPLOAD_DIR = './uploads';

mkdirp.sync(UPLOAD_DIR);

const parseMetadata = (metadata) => {
  const [video, audio] = metadata.streams;
  return {
    codec_video: video.codec_name,
    codec_audio: audio.codec_name,
    duration: metadata.format.duration
  }
}

const getMetadata = (stream) => new Promise((resolve, reject) => {
  const process = new ffmpeg(stream());
  process
    .ffprobe((err, data) => {
      if (err) reject(err);
      resolve(parseMetadata(data));
    })
});

const uploadMedia = ({ createReadStream, filename, mimetype, path }, type) =>
  new Promise((resolve, reject) => {
    const stream = path ? createReadStream(path) : createReadStream();
    const blob = bucket.file(filename);

    const writeStream = blob.createWriteStream({
      resumable: true,
      contentType: mimetype,
      predefinedAcl: 'publicRead',
    });

    writeStream.on('error', reject);

    writeStream
      .on('finish', () => {
        console.log('finish', blob.name);
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve({ [type]: publicUrl });
      })
      .on('error', reject);;

    stream.on('error', (error) => writeStream.destroy(error));

    stream.pipe(writeStream);
  })

const uploadImage = (file, fileName, path) => {
  return uploadMedia({
    ...file,
    createReadStream: fs.createReadStream,
    mimetype: 'image/png',
    filename: `${fileName.split('.')[0]}.png`,
    path
  }, 'image');
};
const uploadVideo = (file, fileName) => uploadMedia({...file, filename: fileName }, 'video')

const screenshotVideo = (createReadStream, filename, duration) => new Promise(async (resolve, reject) => {
  const fileName = filename.split('.')[0];
  const process = new ffmpeg(createReadStream());
  process
    .on('end', () => resolve(`${UPLOAD_DIR}/${fileName}.png`))
    .on('error', reject)
    .takeScreenshots({
      count: 2, timemarks: [Math.floor(duration / 2)], size: '300x210', filename: fileName
    }, UPLOAD_DIR)
});

export default async (arg) => {
  const file = await arg;
  const id = shortid.generate();
  const fileName = `${id}-${file.filename}`;
  let localJpg;
  try {
    const metadata = await getMetadata(file.createReadStream);
    localJpg = await screenshotVideo(file.createReadStream, fileName, metadata.duration);

    const [publicUrlVideo, publicUrlImage] = await Promise.all(
      [uploadVideo(file, fileName), uploadImage(file, fileName, localJpg)]
    );
    
    await db.get('videos')
      .push({
        id: fileName,
        ...publicUrlVideo,
        ...publicUrlImage,
        ...metadata
      })
      .write()

    return { ...publicUrlVideo, ...publicUrlImage, id };
  } catch (error) {
    console.log(error);
    throw err;
  } finally {
    fs.unlink(localJpg,(err) => {
      if (err) throw err;
      console.log('File deleted!');
    });
  }
}