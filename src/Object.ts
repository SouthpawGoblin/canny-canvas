import utils from './utils';

export interface CannyObjectConfig {
  name?: string;
  update?: (this: CannyObject) => void;
}

export default class CannyObject {
  readonly id: string;
  name: string;
  position: number[];
  anchor: number[];
  update: (this: CannyObject) => void;
  
  constructor(config?: CannyObjectConfig) {
    this.id = utils.uuid();
    this.name = config?.name ?? '';
    this.update = config?.update ?? (() => {});
    this.position = [0, 0];
    this.anchor = [0.5, 0.5];
  }

  protected render(this: CannyObject, ctx: CanvasRenderingContext2D) {};

  protected dispose(this: CannyObject) {};
}