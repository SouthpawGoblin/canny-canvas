import CannyObject from "./Object";

export default class CannyScene extends CannyObject {
  dom: HTMLElement;
  translate: number[];

  protected _canvas: HTMLCanvasElement;
  protected _mounted: boolean;
  protected _rendering: boolean;

  constructor(dom: HTMLElement) {
    super({
      name: 'Scene',
      x: dom.clientWidth / 2,
      y: dom.clientHeight / 2
    });
    this.dom = dom;
    this.translate = [0, 0];
    this._canvas = document.createElement('canvas');
    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';
    this._mounted = false;
    this._rendering = true;
  }

  dispose() {
    // TODO:
    this._rendering = false;
  }

  loop = (deltaTime: number) => {
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
        obj.render(ctx);
        obj.children.forEach(child => queue.push(child));
      }
    }
  }
}