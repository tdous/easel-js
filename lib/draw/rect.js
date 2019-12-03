export const rect = (cx, x, y, w, h, opts = {}) => {
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
