import { ObjectConfig } from "./Object";
import { RectConfig } from "./Rect";

export const OBJECT_CONFIG: ObjectConfig = {
  name: 'NewObject',
  x: 0,
  y: 0,
  anchorX: 0.5,
  anchorY: 0.5,
  scale: 1,
  rotation: 0,
  update: () => {}
};

export const RECT_CONFIG: RectConfig = {
  width: 100,
  height: 100,
  color: '#000000',
  stroke: false,
  strokeWidth: 10,
  cornerRadius: 0,
  ...OBJECT_CONFIG
}