import { DrawOpts } from './../defs/DrawOpts';
interface CanvasInterface {
    cv: HTMLCanvasElement | null;
    cx: CanvasRenderingContext2D | null;
}
export declare class Easel implements CanvasInterface {
    private rt;
    private h;
    private w;
    cv: HTMLCanvasElement;
    cx: CanvasRenderingContext2D;
    bindTo(id: string): this;
    drawLine(points: number[][], opts?: DrawOpts): void;
    drawShape(points: number[][], opts?: DrawOpts): void;
    drawArc(x: number, y: number, radius: number, angleFrom: number, angleTo: number, opts?: DrawOpts): void;
    drawCircle(x: number, y: number, radius: number, opts?: DrawOpts): void;
}
export {};
