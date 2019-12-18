export class Easel {
    constructor(id, opts) {
        return this.bindTo(id, opts);
    }
    bindTo(id, opts) {
        this.cv = document.getElementById(id);
        this.cx = this.cv.getContext('2d');
        this.setupCanvas(opts);
        return this;
    }
    setupCanvas(opts) {
        if (opts) {
            if (typeof opts.tabIndex !== 'undefined') {
                this.cv.tabIndex = opts.tabIndex;
            }
            if (opts.focus) {
                this.cv.focus();
            }
        }
        const cvStyle = window.getComputedStyle(this.cv);
        this.cv.setAttribute('width', cvStyle.width);
        this.cv.setAttribute('height', cvStyle.height);
        this.w = parseInt(cvStyle.width);
        this.h = parseInt(cvStyle.height);
        this.rt = this.cv.getBoundingClientRect();
    }
    config(conf) {
        for (let i in conf) {
            this.cx[i] = conf[i];
        }
    }
    wipe() {
        this.cx.clearRect(0, 0, this.w, this.h);
    }
}
