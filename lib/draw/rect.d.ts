import { DrawOpts } from './../defs/DrawOpts';
export interface RectInterface {
    (cx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, opts?: DrawOpts): void;
}
export declare const rect: RectInterface;
