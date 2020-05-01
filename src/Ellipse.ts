import CannyObject, { ObjectConfig } from "./Object";
import { ELLIPSE_CONFIG } from "./defaults";

export interface EllipseConfig extends ObjectConfig {
  radiusX: number;
  radiusY: number;
  startAngle: number;
  endAngle: number;
  stroke: boolean;
  strokeWidth: number;
  color: string;
}

export default class CannyEllipse extends CannyObject {
  radiusX: number;
  radiusY: number;
  startAngle: number;
  endAngle: number;
  stroke: boolean;
  strokeWidth: number;
  color: string;

  constructor(config?: Partial<EllipseConfig>) {
    super(config);
    this.radiusX = config?.radiusX ?? ELLIPSE_CONFIG.radiusX;
    this.radiusY = config?.radiusY ?? ELLIPSE_CONFIG.radiusY;
    this.startAngle = config?.startAngle ?? ELLIPSE_CONFIG.startAngle;
    this.endAngle = config?.endAngle ?? ELLIPSE_CONFIG.endAngle;
    this.stroke = config?.stroke ?? ELLIPSE_CONFIG.stroke;
    this.strokeWidth = config?.strokeWidth ?? ELLIPSE_CONFIG.strokeWidth;
    this.color = config?.color ?? ELLIPSE_CONFIG.color;
  }

  render(ctx: CanvasRenderingContext2D, debug?: boolean) {
    const ellipseX = -this.radiusX * 2 * this.anchorX + this.radiusX;
    const ellipseY = -this.radiusY * 2 * this.anchorY + this.radiusY;
    if (this.stroke) {
      // stroke ellipse
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.strokeWidth;
      ctx.beginPath();
      ctx.ellipse(ellipseX, ellipseY, this.radiusX, this.radiusY, 0, this.startAngle, this.endAngle);
      ctx.stroke();
    } else {
      // fill ellipse
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(ellipseX, ellipseY, this.radiusX, this.radiusY, 0, this.startAngle, this.endAngle);
      ctx.fill();
    }
    // debug mode
    if (debug) {
      ctx.fillStyle = '#666666';
      ctx.beginPath();
      ctx.ellipse(0, 0, 3, 3, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  dispose() {
    // TODO:
  }
}