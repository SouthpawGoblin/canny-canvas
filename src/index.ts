import { version } from './Canny';
import CannyObject from './Object';
import CannyScene from './Scene';

const canny = {
  version,
  Object: CannyObject,
  Scene: CannyScene
};
export default canny;