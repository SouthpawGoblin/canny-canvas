import CannyObject, { ObjectConfig } from "./Object";
export interface EllipseConfig extends ObjectConfig {
    radiusX: number;
    radiusY: number;
    startAngle: number;
    endAngle: number;
    stroke: boolean;
    strokeWidth: number;
    color: string;
}
export default class CannyEllipse extends CannyObject {
    radiusX: number;
    radiusY: number;
    startAngle: number;
    endAngle: number;
    stroke: boolean;
    strokeWidth: number;
    color: string;
    constructor(config?: Partial<EllipseConfig>);
    render(ctx: CanvasRenderingContext2D, debug?: boolean): void;
    dispose(): void;
}
