import { arc, line, rect } from './../draw';
export class Easel {
    bindTo(id) {
        this.cv = document.getElementById(id);
        this.cx = this.cv.getContext('2d');
        this.setupCanvas();
        return this;
    }
    setupCanvas() {
        const compStyle = window.getComputedStyle(this.cv);
        this.cv.setAttribute('width', compStyle.width);
        this.cv.setAttribute('height', compStyle.height);
        this.w = parseInt(compStyle.width);
        this.h = parseInt(compStyle.height);
        this.rt = this.cv.getBoundingClientRect();
    }
    drawLine(points, opts) {
        line(this.cx, points, opts);
    }
    drawShape(points, opts) {
        line(this.cx, points, Object.assign(Object.assign({}, opts), { closed: true }));
    }
    drawArc(x, y, radius, angleFrom, angleTo, opts) {
        arc(this.cx, x, y, radius, angleFrom, angleTo, opts);
    }
    drawCircle(x, y, radius, opts) {
        arc(this.cx, x, y, radius, 0, Math.PI * 2, opts);
    }
    drawRect(x, y, w, h, opts) {
        rect(this.cx, x, y, w, h, opts);
    }
    restoreState() {
        this.cx.restore();
    }
    saveState() {
        this.cx.save();
    }
    wipe() {
        this.cx.clearRect(0, 0, this.w, this.h);
    }
}
