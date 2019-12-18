interface CanvasInterface {
    cv: HTMLCanvasElement | null;
    cx: CanvasRenderingContext2D | null;
    h: number | null;
    w: number | null;
    rt: ClientRect | null;
}
declare type OptsType = {
    focus: boolean;
    tabIndex: number;
};
export declare class Easel implements CanvasInterface {
    h: number;
    w: number;
    cv: HTMLCanvasElement;
    cx: CanvasRenderingContext2D;
    rt: ClientRect;
    constructor(id: string, opts?: OptsType);
    bindTo(id: string, opts?: OptsType): this;
    setupCanvas(opts?: OptsType): void;
    config(conf: {
        [key: string]: number | string;
    }): void;
    wipe(): void;
}
export {};
