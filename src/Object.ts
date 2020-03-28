import utils from './utils';

export interface ObjectConfig {
  name: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  update: (deltaTime: number) => void;
}

export default class CannyObject {
  readonly id: string;
  name: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  worldX: number;
  worldY: number;
  scale: number;
  parent: CannyObject | null;
  children: CannyObject[];
  update: (deltaTime: number) => void;
  
  constructor(config?: Partial<ObjectConfig>) {
    this.id = utils.uuid();
    this.name = config?.name ?? '';
    this.x = config?.x ?? 0;
    this.y = config?.y ?? 0;
    this.anchorX = config?.anchorX ?? 0.5;
    this.anchorY = config?.anchorY ?? 0.5;
    this.update = config?.update ?? (() => {});
    this.worldX = 0;
    this.worldY = 0;
    this.scale = 1;
    this.parent = null;
    this.children = [];
  }

  render(ctx: CanvasRenderingContext2D) {};

  dispose() {};

  addObject(obj: CannyObject) {
    this.children.push(obj);
    obj.parent = this;
  }
}