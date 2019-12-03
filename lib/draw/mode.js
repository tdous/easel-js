var DrawModes;
(function (DrawModes) {
    DrawModes[DrawModes["f"] = 0] = "f";
    DrawModes[DrawModes["s"] = 1] = "s";
    DrawModes[DrawModes["fs"] = 2] = "fs";
    DrawModes[DrawModes["sf"] = 3] = "sf"; // Stroke then fill
})(DrawModes || (DrawModes = {}));
export const drawWithMode = (cx, mode) => {
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
