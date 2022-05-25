let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

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
    xCoordinate : number;
    yCoordinate : number;
    color : string;

    constructor (xCoordinate : number, yCoordinate : number, color? : string){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.color = color || "white";
    }

    changeColor(color : string){
        this.color = color;
    }

    fill(x : number = 0, y : number = 0, color? : string) : void {
        ctx.beginPath();
        ctx.fillStyle = color || this.color;
        ctx.arc(x, y, 1, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }

    makeOrColorGrid(xMin : number, yMin : number, xMax : number, yMax : number, inc : number) {
        // making vertical lines
        for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc){
            for (let yUpdate = yMin; yUpdate < yMax; yUpdate++){
                this.fill(xUpdate, yUpdate);
            }
        }

        // making horizontal lines
        for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc){ 
            for (let xUpdate = xMin; xUpdate < xMax; xUpdate++){
                this.fill(xUpdate, yUpdate);
            }
        }
    }
    
}

class PixelNumber extends Pixel {
    num : number;

    constructor(xCoordinate : number, yCoordinate : number, color: string, num : number){
        super(xCoordinate, yCoordinate, color);
        this.num = num;
    }

    insertNum (x : number, y : number, num : number){
        ctx.font = "15px Calibri";
        ctx.fillStyle = "black";
        ctx.fillText(`${num}`, x - 23, y - 15);
    }

}

class CheckablePixel extends PixelNumber {
    correctColor : string;

    constructor(xCoordinate : number, yCoordinate : number, color: string, num : number, correctColor : string) {
        super(xCoordinate, yCoordinate, color, num);
        this.correctColor = correctColor;
    }

    checkColor() {
        if (this.color === this.correctColor) {
            this.makeOrColorGrid(this.xCoordinate - 38, this.yCoordinate - 38, this.xCoordinate - 1, this.yCoordinate - 1, 1);
        } else {
            super.changeColor("white")
            super.makeOrColorGrid(this.xCoordinate - 38, this.yCoordinate - 38, this.xCoordinate - 1, this.yCoordinate - 1, 1)
            ctx.fillStyle = "black"
            ctx.fillText(`${this.num}X`, this.xCoordinate - 23, this.yCoordinate - 15);
            ctx.fillStyle = this.color;
        }
    }
}