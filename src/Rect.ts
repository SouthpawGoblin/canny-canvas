import CannyObject from "./Object";

export default class CannyRect extends CannyObject {
  width: number;
  height: number;

  constructor(width?: number, height?: number) {
    super();
    this.width = width ?? 100;
    this.height = height ?? 100;
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