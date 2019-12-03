import { DrawOpts } from './../defs/DrawOpts';
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
    bindTo(id: string): this;
    setupCanvas(): void;
    drawLine(points: number[][], opts?: DrawOpts): void;
    drawShape(points: number[][], opts?: DrawOpts): void;
    drawArc(x: number, y: number, radius: number, angleFrom: number, angleTo: number, opts?: DrawOpts): void;
    drawCircle(x: number, y: number, radius: number, opts?: DrawOpts): void;
    restoreState(): void;
    saveState(): void;
    wipe(): void;
}
export {};
