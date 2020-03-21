import CannyObject from "./Object";

export default class CannyScene extends CannyObject {
  dom: HTMLElement;
  translate: number[];
  scale: number;

  private _canvas: HTMLCanvasElement;

  constructor(dom: HTMLElement) {
    super();
    this.dom = dom;
    this.translate = [0, 0];
    this.scale = 1;
    this._canvas = document.createElement('canvas');
  }

  protected render() {

  }

  protected dispose() {

  }
}