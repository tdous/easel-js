import { DrawOpts } from './../defs/DrawOpts';
export interface LineInterface {
    (cx: CanvasRenderingContext2D, points: number[][], opts?: DrawOpts): void;
}
export declare const line: LineInterface;
