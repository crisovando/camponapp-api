
import singleUpload from './mutations/singleUpload';
import removeVideo from './mutations/removeVideo';
import { db } from '../../../services/connectors';

export default {
  Query: {
    videos: () => db.get('videos').value(),
  },
  Mutation: {
    singleUpload: (parent, { file }) => singleUpload(file),
    removeVideo: (parent, { id }) => removeVideo(id)
  },
};
