import { drawWithMode } from './mode';
export const arc = (cx, x, y, radius, radFrom, radTo, mode, antiClockwise = false) => {
    cx.beginPath();
    cx.arc(x, y, radius, radFrom, radTo, antiClockwise);
    drawWithMode(cx, mode);
};
