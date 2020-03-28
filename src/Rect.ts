import CannyObject, { ObjectConfig } from "./Object";
import { BorderStyle } from "./types";
import { BORDER_STYLE } from "./defaults";

interface RectConfig extends ObjectConfig {
  width: number;
  height: number;
  border: BorderStyle;
  fillColor: string;
}

export default class CannyRect extends CannyObject {
  width: number;
  height: number;
  borderStyle: BorderStyle;
  fillColor: string;

  constructor(config?: Partial<RectConfig>) {
    super(config);
    this.width = config?.width ?? 100;
    this.height = config?.height ?? 100;
    this.borderStyle = {
      show: config?.border?.show ?? BORDER_STYLE.show,
      width: config?.border?.width ?? BORDER_STYLE.width,
      color: config?.border?.color ?? BORDER_STYLE.color,
      radius: config?.border?.radius ?? BORDER_STYLE.radius
    };
    this.fillColor = config?.fillColor ?? '#000000';
    this.update = config?.update ?? (() => {});
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.parent) {
      return;
    }
    // update world coord
    this.worldX = this.parent.worldX + this.x;
    this.worldY = this.parent.worldY + this.y;
    const rectX = this.worldX - this.width * this.anchorX;
    const rectY = this.worldY - this.height * this.anchorY;
    // fill rect
    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.fillRect(rectX, rectY, this.width, this.height);
    // stroke border
    if (this.borderStyle.show) {
      // TODO: handle border radius
      ctx.strokeStyle = this.borderStyle.color;
      ctx.lineWidth = this.borderStyle.width;
      ctx.beginPath();
      ctx.strokeRect(rectX, rectY, this.width, this.height);
    }
  }

  dispose() {
    // TODO:
  }
}