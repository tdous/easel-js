import { arc, line } from './../draw';
import { DrawOpts } from './../defs/DrawOpts';

interface CanvasInterface {
  cv: HTMLCanvasElement | null;
  cx: CanvasRenderingContext2D | null;
}

export class Easel implements CanvasInterface {
  private rt!: ClientRect;
  private h!: number;
  private w!: number;
  cv!: HTMLCanvasElement;
  cx!: CanvasRenderingContext2D;

  bindTo(id: string) {
    this.cv = <HTMLCanvasElement>document.getElementById(id);
    this.cx = this.cv.getContext('2d')!;
    const compStyle = window.getComputedStyle(this.cv);
    this.cv.setAttribute('width', compStyle.width!);
    this.cv.setAttribute('height', compStyle.height!);
    this.w = parseInt(compStyle.width!);
    this.h = parseInt(compStyle.height!);
    this.rt = this.cv.getBoundingClientRect();
    return this;
  }

  wipe() {
    this.cx.clearRect(0, 0, this.w, this.h);
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

  restoreState() {
    this.cx.restore();
  }

  saveState() {
    this.cx.save();
  }
}
