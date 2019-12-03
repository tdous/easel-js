interface CanvasInterface {
  cv: HTMLCanvasElement | null;
  cx: CanvasRenderingContext2D | null;
  h: number | null;
  w: number | null;
  rt: ClientRect | null;
}

export class Easel implements CanvasInterface {
  h!: number;
  w!: number;
  cv!: HTMLCanvasElement;
  cx!: CanvasRenderingContext2D;
  rt!: ClientRect;

  constructor(id: string) {
    return this.bindTo(id);
  }

  bindTo(id: string) {
    this.cv = <HTMLCanvasElement>document.getElementById(id);
    this.cx = this.cv.getContext('2d')!;
    this.setupCanvas();
    return this;
  }

  setupCanvas() {
    const cvStyle = window.getComputedStyle(this.cv);
    this.cv.setAttribute('width', cvStyle.width!);
    this.cv.setAttribute('height', cvStyle.height!);
    this.w = parseInt(cvStyle.width!);
    this.h = parseInt(cvStyle.height!);
    this.rt = this.cv.getBoundingClientRect();
  }

  wipe() {
    this.cx.clearRect(0, 0, this.w, this.h);
  }
}
