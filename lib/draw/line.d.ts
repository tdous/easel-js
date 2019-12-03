import { ModeStrs } from './mode';
interface LineInterface {
    (cx: CanvasRenderingContext2D, points: number[][], mode: ModeStrs): void;
}
export declare const line: LineInterface;
export {};
