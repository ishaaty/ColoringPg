"use strict";
let rainbowHeartArray = [];
for (let x = 0; x <= 800; x += 40) {
    for (let y = 0; y <= 800; y += 40) {
        switch (true) {
            case ((x === 120) && (y >= 280 && y <= 440)):
            case ((y === 200) && ((x >= 200 && x <= 320) || (x >= 520 && x <= 640))):
            case ((x === 720) && (y >= 280 && y <= 440)):
            case ((y === 240) && (x === 160 || x === 360 || x === 480 || x === 680)):
            case ((y === 720 || y === 280) && (x >= 400 && x <= 440)):
            case ((y === 480) && (x === 160 || x === 680)):
            case ((y === 520) && (x === 200 || x === 640)):
            case ((y === 560) && (x === 240 || x === 600)):
            case ((y === 600) && (x === 280 || x === 560)):
            case ((y === 640) && (x === 320 || x === 520)):
            case ((y === 680) && (x === 360 || x === 480)):
                let p = new CheckablePixel(x, y, "black", 14, "black");
                rainbowHeartArray.push(p);
                break;
            default:
                let px = new CheckablePixel(x, y, "whitesmoke", 13, "whitesmoke");
                rainbowHeartArray.push(px);
                break;
        }
    }
}
console.log(rainbowHeartArray);