import { ModeStrs, drawWithMode } from './mode';

interface ArcInterface {
  (
    cx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    radFrom: number,
    radTo: number,
    mode: ModeStrs,
    antiClockwise?: boolean
  ): void;
}

export const arc: ArcInterface = (
  cx,
  x,
  y,
  radius,
  radFrom,
  radTo,
  mode,
  antiClockwise = false
): void => {
  cx.beginPath();
  cx.arc(x, y, radius, radFrom, radTo, antiClockwise);
  drawWithMode(cx, mode);
};
