var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
// red : 0
// orangered : 1
// orange : 2
// yellow : 3
// yellowgreen : 4
// green : 5
// lightblue : 6
// blue : 7
// blueviolet : 8
// purple : 9
// pink : 10
// grey : 11
// brown : 12
// whitesmoke : 13
// black : 14
var Pixel = /** @class */ (function () {
    function Pixel(xCoordinate, yCoordinate, color) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.color = color || "white";
    }
    Pixel.prototype.changeColor = function (color) {
        this.color = color;
    };
    Pixel.prototype.fill = function (x, y, color) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        ctx.beginPath();
        ctx.fillStyle = color || this.color;
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };
    Pixel.prototype.makeOrColorGrid = function (xMin, yMin, xMax, yMax, inc, color) {
        // making vertical lines
        for (var xUpdate = xMin; xUpdate < xMax; xUpdate += inc) {
            for (var yUpdate = yMin; yUpdate < yMax; yUpdate++) {
                this.fill(xUpdate, yUpdate, color);
            }
        }
        // making horizontal lines
        for (var yUpdate = yMin; yUpdate < yMax; yUpdate += inc) {
            for (var xUpdate = xMin; xUpdate < xMax; xUpdate++) {
                this.fill(xUpdate, yUpdate, color);
            }
        }
    };
    return Pixel;
}());
var PixelNumber = /** @class */ (function (_super) {
    __extends(PixelNumber, _super);
    function PixelNumber(xCoordinate, yCoordinate, color, num) {
        var _this = _super.call(this, xCoordinate, yCoordinate, color) || this;
        _this.num = num;
        return _this;
    }
    PixelNumber.prototype.insertNum = function (x, y, num) {
        ctx.font = "15px Calibri";
        ctx.fillStyle = "black";
        ctx.fillText("".concat(num), x - 20, y - 20);
    };
    return PixelNumber;
}(Pixel));
var CheckablePixel = /** @class */ (function (_super) {
    __extends(CheckablePixel, _super);
    function CheckablePixel(xCoordinate, yCoordinate, color, num, correctColor) {
        var _this = _super.call(this, xCoordinate, yCoordinate, color, num) || this;
        _this.correctColor = correctColor;
        return _this;
    }
    CheckablePixel.prototype.makeOrColorGrid = function (xMin, yMin, xMax, yMax, inc) {
        if (this.color === this.correctColor) {
            _super.prototype.makeOrColorGrid.call(this, xMin, yMin, xMax, yMax, inc, this.color);
        }
        else {
            _super.prototype.makeOrColorGrid.call(this, xMin, yMin, xMax, yMax, inc, "white");
            ctx.fillStyle = "black";
            ctx.fillText("X".concat(this.num, "X"), this.xCoordinate - 23, this.yCoordinate - 15);
        }
    };
    return CheckablePixel;
}(PixelNumber));
