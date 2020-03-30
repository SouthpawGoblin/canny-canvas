import CannyObject from "./Object";
export default class CannyScene extends CannyObject {
    dom: HTMLElement;
    translate: number[];
    protected _canvas: HTMLCanvasElement;
    protected _mounted: boolean;
    protected _rendering: boolean;
    protected _time: number;
    constructor(dom: HTMLElement);
    dispose(): void;
    loop: (time: number) => void;
    protected updateAndRender(ctx: CanvasRenderingContext2D, deltaTime: number): void;
}
