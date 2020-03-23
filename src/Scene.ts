import CannyObject from "./Object";

export default class CannyScene extends CannyObject {
  dom: HTMLElement;
  translate: number[];

  protected _canvas: HTMLCanvasElement;
  protected _mounted: boolean;

  constructor(dom: HTMLElement) {
    super();
    this.dom = dom;
    this.translate = [0, 0];
    this._canvas = document.createElement('canvas');
    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';
    this._mounted = false;
  }

  protected render() {
    if (!this._mounted) {
      this.dom.appendChild(this._canvas);
      this._mounted = true;
    }
    // TODO: 
  }

  protected dispose() {
    // TODO:
  }
}