import { bucket, db } from '../../../../services/connectors';

export default async (id) => {
  const pathScreenshot = id.split('.')[0] + '.png';
  await bucket.file(pathScreenshot).delete();
  await bucket.file(id).delete();
  await db.get('videos').remove({ id }).write()
  return true;
}
