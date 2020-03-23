import utils from './utils';

export interface CannyObjectConfig {
  name?: string;
  update?: (this: CannyObject) => void;
}

export default class CannyObject {
  readonly id: string;
  name: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  scale: number;
  parent: CannyObject | null;
  children: CannyObject[];
  update: (this: CannyObject) => void;
  
  constructor(config?: CannyObjectConfig) {
    this.id = utils.uuid();
    this.name = config?.name ?? '';
    this.update = config?.update ?? (() => {});
    this.x = 0;
    this.y = 0;
    this.anchorX = 0.5;
    this.anchorY = 0.5;
    this.scale = 1;
    this.parent = null;
    this.children = [];
  }

  protected render(this: CannyObject, ctx: CanvasRenderingContext2D) {};

  protected dispose(this: CannyObject) {};

  addObject(obj: CannyObject) {
    this.children.push(obj);
    obj.parent = this;
  }
}