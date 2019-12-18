interface CanvasInterface {
  cv: HTMLCanvasElement | null;
  cx: CanvasRenderingContext2D | null;
  h: number | null;
  w: number | null;
  rt: ClientRect | null;
}

type OptsType = {
  focus: boolean;
  tabIndex: number;
};

export class Easel implements CanvasInterface {
  h!: number;
  w!: number;
  cv!: HTMLCanvasElement;
  cx!: CanvasRenderingContext2D;
  rt!: ClientRect;

  constructor(id: string, opts?: OptsType) {
    return this.bindTo(id, opts);
  }

  bindTo(id: string, opts?: OptsType) {
    this.cv = <HTMLCanvasElement>document.getElementById(id);
    this.cx = this.cv.getContext('2d')!;
    this.setupCanvas(opts);
    return this;
  }

  setupCanvas(opts?: OptsType) {
    if (opts) {
      if (typeof opts.tabIndex !== 'undefined') {
        this.cv.tabIndex = opts.tabIndex;
      }
      if (opts.focus) {
        this.cv.focus();
      }
    }

    const cvStyle = window.getComputedStyle(this.cv);
    this.cv.setAttribute('width', cvStyle.width!);
    this.cv.setAttribute('height', cvStyle.height!);
    this.w = parseInt(cvStyle.width!);
    this.h = parseInt(cvStyle.height!);
    this.rt = this.cv.getBoundingClientRect();
  }

  config(conf: { [key: string]: number | string }) {
    for (let i in conf) {
      (this.cx as any)[i] = conf[i];
    }
  }

  wipe() {
    this.cx.clearRect(0, 0, this.w, this.h);
  }
}
