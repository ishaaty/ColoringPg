"use strict";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
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
class Pixel {
    constructor(xCoordinate, yCoordinate, color) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.color = color || "white";
    }
    changeColor(color) {
        this.color = color;
    }
    fill(x = 0, y = 0) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    makeOrColorGrid(xMin, yMin, xMax, yMax, inc) {
        // making vertical lines
        for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc) {
            for (let yUpdate = yMin; yUpdate < yMax; yUpdate++) {
                this.fill(xUpdate, yUpdate);
            }
        }
        // making horizontal lines
        for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc) {
            for (let xUpdate = xMin; xUpdate < xMax; xUpdate++) {
                this.fill(xUpdate, yUpdate);
            }
        }
    }
}
// class PixelNumbers extends Pixel {
// }
// add number sub-class:
// ctx.font = "15px Calibri";
// ctx.fillStyle = "black";
// ctx.fillText("1", 17, 25);
