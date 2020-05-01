import utils from './utils';
import { OBJECT_CONFIG } from './defaults';

export interface ObjectConfig {
  name: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  scale: number;
  rotation: number;
  update: (deltaTime: number) => void;
}

export default class CannyObject {
  readonly id: string;
  name: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  scale: number;
  rotation: number;
  update: (deltaTime: number) => void;

  // internal variables, not recommended to modify in update function.
  worldX: number;
  worldY: number;
  parent: CannyObject | null;
  children: CannyObject[];
  
  constructor(config?: Partial<ObjectConfig>) {
    this.id = utils.uuid();
    this.name = config?.name ?? OBJECT_CONFIG.name;
    this.x = config?.x ?? OBJECT_CONFIG.x;
    this.y = config?.y ?? OBJECT_CONFIG.y;
    this.anchorX = config?.anchorX ?? OBJECT_CONFIG.anchorX;
    this.anchorY = config?.anchorY ?? OBJECT_CONFIG.anchorY;
    this.scale = config?.scale ?? OBJECT_CONFIG.scale;
    this.rotation = config?.rotation ?? OBJECT_CONFIG.rotation;
    this.update = config?.update ?? OBJECT_CONFIG.update;
    this.worldX = 0;
    this.worldY = 0;
    this.parent = null;
    this.children = [];
  }

  render(ctx: CanvasRenderingContext2D, debug?: boolean) {};

  dispose() {};

  addObject(obj: CannyObject) {
    this.children.push(obj);
    obj.parent = this;
  }
}