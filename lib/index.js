export class Easel {
    constructor(id) {
        return this.bindTo(id);
    }
    bindTo(id) {
        this.cv = document.getElementById(id);
        this.cx = this.cv.getContext('2d');
        this.setupCanvas();
        return this;
    }
    setupCanvas() {
        const cvStyle = window.getComputedStyle(this.cv);
        this.cv.setAttribute('width', cvStyle.width);
        this.cv.setAttribute('height', cvStyle.height);
        this.w = parseInt(cvStyle.width);
        this.h = parseInt(cvStyle.height);
        this.rt = this.cv.getBoundingClientRect();
    }
    wipe() {
        this.cx.clearRect(0, 0, this.w, this.h);
    }
}
