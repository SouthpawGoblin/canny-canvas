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
    worldX: number;
    worldY: number;
    parent: CannyObject | null;
    children: CannyObject[];
    constructor(config?: Partial<ObjectConfig>);
    render(ctx: CanvasRenderingContext2D, debug?: boolean): void;
    dispose(): void;
    addObject(obj: CannyObject): void;
}
