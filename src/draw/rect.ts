import { DrawOpts } from './../defs/DrawOpts';

export interface RectInterface {
  (
    cx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    opts?: DrawOpts
  ): void;
}

export const rect: RectInterface = (cx, x, y, w, h, opts = {}): void => {
  const { fill, fillStyle, lineWidth, stroke = true, strokeStyle } = opts;

  if (fillStyle) {
    cx.fillStyle = fillStyle;
  }
  if (lineWidth) {
    cx.lineWidth = lineWidth;
  }
  if (strokeStyle) {
    cx.strokeStyle = strokeStyle;
  }

  cx.beginPath();
  cx.rect(x, y, w, h);

  if (fill) {
    cx.fill();
  }
  if (stroke) {
    cx.stroke();
  }
};
