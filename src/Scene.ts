import CannyObject from "./Object";

export default class CannyScene extends CannyObject {
  dom: HTMLElement;
  translate: number[];
  debug: boolean;

  protected _canvas: HTMLCanvasElement;
  protected _mounted: boolean;
  protected _rendering: boolean;
  protected _time: number;

  constructor(dom: HTMLElement) {
    super({
      name: 'Scene',
      x: dom.clientWidth / 2,
      y: dom.clientHeight / 2
    });
    this.dom = dom;
    this.translate = [0, 0];
    this.debug = false;
    this._canvas = document.createElement('canvas');
    this._canvas.width = this.dom.clientWidth;
    this._canvas.height = this.dom.clientHeight;
    this._mounted = false;
    this._rendering = true;
    this._time = 0;
  }

  dispose() {
    // TODO:
    this._rendering = false;
  }

  loop = (time: number = 0) => {
    if (!this._mounted) {
      this.dom.appendChild(this._canvas);
      this._mounted = true;
    }
    if (!this._rendering) {
      return;
    }
    const ctx = this._canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.dom.clientWidth, this.dom.clientHeight);
      const deltaTime = time - this._time;
      this._time = time;
      this.updateAndRender(ctx, deltaTime);
    }

    requestAnimationFrame(this.loop);
  }

  protected updateAndRender(ctx: CanvasRenderingContext2D, deltaTime: number) {
    // update scene's world coord
    this.worldX = this.translate[0] + this.dom.clientWidth * this.anchorX;
    this.worldY = this.translate[1] + this.dom.clientHeight * this.anchorY;

    // BFS traverse to ensure parents are always rendered under their children
    const queue = [...this.children];
    while (queue.length > 0) {
      const obj = queue.shift();
      if (obj) {
        obj.update(deltaTime);
        ctx.save();
        if (obj.parent) {
          // update world coord
          obj.worldX = obj.parent.worldX + obj.x;
          obj.worldY = obj.parent.worldY + obj.y;
          // prepare canvas
          ctx.translate(obj.worldX, obj.worldY);
          ctx.rotate(obj.rotation);
          // render
          obj.render(ctx, this.debug);
        }
        ctx.restore();
        obj.children.forEach(child => queue.push(child));
      }
    }
  }
}