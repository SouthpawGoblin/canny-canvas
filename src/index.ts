import { version } from './common';
import CannyObject from './Object';
import CannyScene from './Scene';
import CannyRect from './Rect';

const canny = {
  version,
  Object: CannyObject,
  Scene: CannyScene,
  Rect: CannyRect
};
export default canny;