import { version } from './common';
import CannyObject from './Object';
import CannyScene from './Scene';

const canny = {
  version,
  Object: CannyObject,
  Scene: CannyScene
};
export default canny;