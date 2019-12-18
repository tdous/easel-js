import { ModeStrs } from './mode';
interface LineInterface {
    (cx: CanvasRenderingContext2D, points: number[][], mode: ModeStrs, close?: Boolean): void;
}
export declare const line: LineInterface;
export {};
