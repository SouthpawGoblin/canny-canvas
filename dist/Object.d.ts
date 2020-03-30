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
    constructor(config?: Partial<ObjectConfig>);
    render(ctx: CanvasRenderingContext2D): void;
    dispose(): void;
    addObject(obj: CannyObject): void;
}
