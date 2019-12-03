interface CanvasInterface {
    cv: HTMLCanvasElement | null;
    cx: CanvasRenderingContext2D | null;
    h: number | null;
    w: number | null;
    rt: ClientRect | null;
}
export declare class Easel implements CanvasInterface {
    h: number;
    w: number;
    cv: HTMLCanvasElement;
    cx: CanvasRenderingContext2D;
    rt: ClientRect;
    constructor(id: string);
    bindTo(id: string): this;
    setupCanvas(): void;
    wipe(): void;
}
export {};
