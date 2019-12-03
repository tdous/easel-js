export const line = (cx, points, opts = {}) => {
    const { closed, fill, fillStyle, lineWidth, stroke = true, strokeStyle } = opts;
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
    cx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        cx.lineTo(points[i][0], points[i][1]);
    }
    if (closed) {
        cx.lineTo(points[0][0], points[0][1]);
    }
    if (fill) {
        cx.fill();
    }
    if (stroke) {
        cx.stroke();
    }
};
