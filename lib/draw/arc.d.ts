import { ModeStrs } from './mode';
interface ArcInterface {
    (cx: CanvasRenderingContext2D, x: number, y: number, radius: number, radFrom: number, radTo: number, mode: ModeStrs, antiClockwise: boolean): void;
}
export declare const arc: ArcInterface;
export {};
