import { ModeStrs, drawWithMode } from './mode';

interface LineInterface {
  (
    cx: CanvasRenderingContext2D,
    points: number[][],
    mode: ModeStrs,
    close?: Boolean 
  ): void;
}

export const line: LineInterface = (cx, points, mode, close): void => {
  cx.beginPath();
  cx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    cx.lineTo(points[i][0], points[i][1]);
  }
  if (close) {
    cx.lineTo(points[0][0], points[0][1]);
  }
  drawWithMode(cx, mode);
};
