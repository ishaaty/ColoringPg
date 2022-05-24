var canvas = document.querySelector("canvas");
var rainbowHeartArray = [];
for (var x = 0; x <= canvas.height; x += 40) {
    for (var y = 0; y <= canvas.width; y += 40) {
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
                rainbowHeartArray.push([x, y, "14", "black"]);
                break;
            default:
                rainbowHeartArray.push([x, y]);
                break;
        }
    }
}
console.log(rainbowHeartArray);
