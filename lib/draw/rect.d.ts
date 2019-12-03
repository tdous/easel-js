import { ModeStrs } from './mode';
interface RectInterface {
    (cx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, mode: ModeStrs): void;
}
export declare const rect: RectInterface;
export {};
