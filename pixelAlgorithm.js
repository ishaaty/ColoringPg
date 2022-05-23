var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
// red : 0
// orange : 1
// yellow : 2
// green : 3
// blue : 4
// purple : 5
// pink : 6
// brown : 7
// white : 8
// black : 9
var Pixel = /** @class */ (function () {
    function Pixel(xCoordinate, yCoordinate, color) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.color = color || "white";
    }
    Pixel.prototype.changeColor = function (color) {
        this.color = color;
    };
    Pixel.prototype.fill = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };
    Pixel.prototype.makeOrColorGrid = function (xMin, yMin, xMax, yMax, inc) {
        // making vertical lines
        for (var xUpdate = xMin; xUpdate < xMax; xUpdate += inc) {
            for (var yUpdate = yMin; yUpdate < yMax; yUpdate++) {
                this.fill(xUpdate, yUpdate);
            }
        }
        // making horizontal lines
        for (var yUpdate = yMin; yUpdate < yMax; yUpdate += inc) {
            for (var xUpdate = xMin; xUpdate < xMax; xUpdate++) {
                this.fill(xUpdate, yUpdate);
            }
        }
    };
    return Pixel;
}());
// add number sub-class:
// ctx.font = "15px Calibri";
// ctx.fillStyle = "black";
// ctx.fillText("1", 17, 25);
