import { arc, line, rect } from './../draw';
import { DrawOpts } from './../defs/DrawOpts';

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

  bindTo(id: string) {
    this.cv = <HTMLCanvasElement>document.getElementById(id);
    this.cx = this.cv.getContext('2d')!;
    this.setupCanvas();
    return this;
  }

  setupCanvas() {
    const compStyle = window.getComputedStyle(this.cv);
    this.cv.setAttribute('width', compStyle.width!);
    this.cv.setAttribute('height', compStyle.height!);
    this.w = parseInt(compStyle.width!);
    this.h = parseInt(compStyle.height!);
    this.rt = this.cv.getBoundingClientRect();
  }

  drawLine(points: number[][], opts?: DrawOpts): void {
    line(this.cx, points, opts);
  }

  drawShape(points: number[][], opts?: DrawOpts): void {
    line(this.cx, points, { ...opts, closed: true });
  }

  drawArc(
    x: number,
    y: number,
    radius: number,
    angleFrom: number,
    angleTo: number,
    opts?: DrawOpts
  ): void {
    arc(this.cx, x, y, radius, angleFrom, angleTo, opts);
  }

  drawCircle(x: number, y: number, radius: number, opts?: DrawOpts): void {
    arc(this.cx, x, y, radius, 0, Math.PI * 2, opts);
  }

  drawRect(x: number, y: number, w: number, h: number, opts?: DrawOpts): void {
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
