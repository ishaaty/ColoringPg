"use strict";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
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
class Pixel {
    constructor(xCoordinate, yCoordinate, color) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.color = color || "black";
    }
    changeColor(color) {
        this.color = color;
    }
    fill(x = 0, y = 0, color) {
        ctx.beginPath();
        ctx.fillStyle = color || this.color;
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    makeOrColorGrid(xMin, yMin, xMax, yMax, inc, color) {
        // making vertical lines
        for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc) {
            for (let yUpdate = yMin; yUpdate < yMax; yUpdate++) {
                if (!color) {
                    this.fill(xUpdate, yUpdate);
                }
                else {
                    this.fill(xUpdate, yUpdate, color);
                }
            }
        }
        // making horizontal lines
        for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc) {
            for (let xUpdate = xMin; xUpdate < xMax; xUpdate++) {
                if (!color) {
                    this.fill(xUpdate, yUpdate);
                }
                else {
                    this.fill(xUpdate, yUpdate, color);
                }
            }
        }
    }
}
class PixelNumber extends Pixel {
    constructor(xCoordinate, yCoordinate, userColor, num) {
        super(xCoordinate, yCoordinate, userColor);
        this.num = num;
    }
    insertNum(x, y, num) {
        ctx.font = "15px Pangolin";
        ctx.fillStyle = "black";
        ctx.fillText(`${num}`, x - 23, y - 20);
    }
}
class CheckablePixel extends PixelNumber {
    constructor(xCoordinate, yCoordinate, color = "black", num, correctColor) {
        super(xCoordinate, yCoordinate, color, num);
        this.correctColor = correctColor;
        this.allowColoring = true;
    }
    makeOrColorGrid(xMin, yMin, xMax, yMax, inc) {
        if (this.allowColoring === true) {
            if (this.color === this.correctColor) {
                super.makeOrColorGrid(xMin, yMin, xMax, yMax, inc);
                this.allowColoring = false;
            }
            else {
                super.changeColor("white");
                super.makeOrColorGrid(xMin, yMin, xMax, yMax, inc);
                ctx.fillStyle = "black";
                ctx.fillText(`X${this.num}X`, this.xCoordinate - 32, this.yCoordinate - 15);
            }
        }
    }
}
