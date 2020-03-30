import CannyObject, { ObjectConfig } from "./Object";
import { BorderStyle } from "./types";
interface RectConfig extends ObjectConfig {
    width: number;
    height: number;
    border: BorderStyle;
    fillColor: string;
}
export default class CannyRect extends CannyObject {
    width: number;
    height: number;
    borderStyle: BorderStyle;
    fillColor: string;
    constructor(config?: Partial<RectConfig>);
    render(ctx: CanvasRenderingContext2D): void;
    dispose(): void;
}
export {};
