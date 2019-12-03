import { DrawOpts } from './../defs/DrawOpts';

type ArcOpts = {
  antiClockwise?: boolean;
};

export interface ArcInterface {
  (
    cx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    angleFrom: number,
    angleTo: number,
    opts?: DrawOpts & ArcOpts
  ): void;
}

export const arc: ArcInterface = (
  cx,
  x,
  y,
  radius,
  angleFrom,
  angleTo,
  opts = {}
): void => {
  const {
    antiClockwise = false,
    fill,
    fillStyle,
    lineWidth,
    stroke = true,
    strokeStyle
  } = opts;

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
  cx.arc(x, y, radius, angleFrom, angleTo, antiClockwise);

  if (fill) {
    cx.fill();
  }
  if (stroke) {
    cx.stroke();
  }
};
