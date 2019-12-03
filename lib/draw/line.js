import { drawWithMode } from './mode';
export const line = (cx, points, mode) => {
    cx.beginPath();
    cx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        cx.lineTo(points[i][0], points[i][1]);
    }
    drawWithMode(cx, mode);
};
