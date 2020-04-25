import CannyObject, { ObjectConfig } from "./Object";
import { RECT_CONFIG } from "./defaults";

export interface RectConfig extends ObjectConfig {
  width: number;
  height: number;
  color: string;
  stroke: boolean;
  strokeWidth: number;
  cornerRadius: number;
}

export default class CannyRect extends CannyObject {
  width: number;
  height: number;
  color: string;
  stroke: boolean;
  strokeWidth: number;
  cornerRadius: number;

  constructor(config?: Partial<RectConfig>) {
    super(config);
    this.width = config?.width ?? RECT_CONFIG.width;
    this.height = config?.height ?? RECT_CONFIG.height;
    this.color = config?.color ?? RECT_CONFIG.color;
    this.stroke = config?.stroke ?? RECT_CONFIG.stroke;
    this.strokeWidth = config?.strokeWidth ?? RECT_CONFIG.strokeWidth;
    this.cornerRadius = config?.cornerRadius ?? RECT_CONFIG.cornerRadius;
  }

  render(ctx: CanvasRenderingContext2D) {
    const rectX = -this.width * this.anchorX;
    const rectY = -this.height * this.anchorY;
    if (this.stroke) {
      // stroke rect
      // TODO: handle corner radius
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.strokeWidth;
      ctx.beginPath();
      ctx.strokeRect(rectX, rectY, this.width, this.height);
    } else {
      // fill rect
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.fillRect(rectX, rectY, this.width, this.height);
    }
  }

  dispose() {
    // TODO:
  }
}