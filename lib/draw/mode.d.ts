declare enum DrawModes {
    f = 0,
    s = 1,
    fs = 2,
    sf = 3
}
export declare type ModeStrs = keyof typeof DrawModes;
export declare const drawWithMode: (cx: CanvasRenderingContext2D, mode: string) => void;
export {};
