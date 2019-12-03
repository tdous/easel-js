import { ModeStrs, drawWithMode } from './mode';

interface RectInterface {
  (
    cx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    mode: ModeStrs
  ): void;
}

export const rect: RectInterface = (cx, x, y, w, h, mode): void => {
  cx.beginPath();
  cx.rect(x, y, w, h);
  drawWithMode(cx, mode);
};
