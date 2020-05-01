import { ObjectConfig } from "./Object";
import { RectConfig } from "./Rect";
import { EllipseConfig } from "./Ellipse";

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
};

export const ELLIPSE_CONFIG: EllipseConfig = {
  radiusX: 50,
  radiusY: 50,
  startAngle: 0,
  endAngle: Math.PI * 2,
  color: '#000000',
  stroke: false,
  strokeWidth: 10,
  ...OBJECT_CONFIG
}
