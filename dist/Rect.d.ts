import CannyObject, { ObjectConfig } from "./Object";
export interface RectConfig extends ObjectConfig {
    width: number;
    height: number;
    color: string;
    stroke: boolean;
    strokeWidth: number;
    cornerRadius: number;
}
export default class CannyRect extends CannyObject {
    width: number;
    height: number;
    color: string;
    stroke: boolean;
    strokeWidth: number;
    cornerRadius: number;
    constructor(config?: Partial<RectConfig>);
    render(ctx: CanvasRenderingContext2D): void;
    dispose(): void;
}
