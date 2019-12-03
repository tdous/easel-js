import { DrawOpts } from './../defs/DrawOpts';
declare type ArcOpts = {
    antiClockwise?: boolean;
};
export interface ArcInterface {
    (cx: CanvasRenderingContext2D, x: number, y: number, radius: number, angleFrom: number, angleTo: number, opts?: DrawOpts & ArcOpts): void;
}
export declare const arc: ArcInterface;
export {};
