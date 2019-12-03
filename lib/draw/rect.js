import { drawWithMode } from './mode';
export const rect = (cx, x, y, w, h, mode) => {
    cx.beginPath();
    cx.rect(x, y, w, h);
    drawWithMode(cx, mode);
};
