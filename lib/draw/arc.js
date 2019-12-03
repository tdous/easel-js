export const arc = (cx, x, y, radius, angleFrom, angleTo, opts = {}) => {
    const { antiClockwise = false, fill, fillStyle, lineWidth, stroke = true, strokeStyle } = opts;
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
