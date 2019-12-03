enum DrawModes {
  f, // Fill
  s, // Stroke
  fs, // Fill then stroke
  sf // Stroke then fill
}

export type ModeStrs = keyof typeof DrawModes;

export const drawWithMode = (
  cx: CanvasRenderingContext2D,
  mode: string
): void => {
  switch (mode) {
    case 'f':
      cx.fill();
      break;
    case 's':
      cx.stroke();
      break;
    case 'fs':
      cx.fill();
      cx.stroke();
      break;
    case 'sf':
      cx.stroke();
      cx.fill();
      break;
  }
};
