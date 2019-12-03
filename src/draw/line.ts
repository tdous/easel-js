import { ModeStrs, drawWithMode } from './mode';

interface LineInterface {
  (
    cx: CanvasRenderingContext2D,
    points: number[][],
    mode: ModeStrs
  ): void;
}

export const line: LineInterface = (cx, points, mode): void => {
  cx.beginPath();
  cx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    cx.lineTo(points[i][0], points[i][1]);
  }
  drawWithMode(cx, mode);
};
