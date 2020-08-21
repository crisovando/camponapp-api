import videoQuery from './VideoQuery';
import videoResolver from './VideoResolver';
import videoType from './VideoType';
import videoMutation from './VideoMutation';

export default {
  typeDef: videoQuery.concat(videoType, videoMutation),
  videoResolver
};