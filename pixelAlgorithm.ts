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
        this.color = color || "black";
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

    makeOrColorGrid(xMin : number, yMin : number, xMax : number, yMax : number, inc : number, color? : string) {
        // making vertical lines
        for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc){
            for (let yUpdate = yMin; yUpdate < yMax; yUpdate++){
                if (!color){
                    this.fill(xUpdate, yUpdate);
                } else {
                    this.fill(xUpdate, yUpdate, color);
                }
            }
        }

        // making horizontal lines
        for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc){ 
            for (let xUpdate = xMin; xUpdate < xMax; xUpdate++){
                if (!color){
                    this.fill(xUpdate, yUpdate);
                } else {
                    this.fill(xUpdate, yUpdate, color);
                }
            }
        }
    }   
}

class PixelNumber extends Pixel {
    num : number;

    constructor(xCoordinate : number, yCoordinate : number, userColor: string, num : number){
        super(xCoordinate, yCoordinate, userColor);
        this.num = num;
    }

    insertNum (x : number, y : number, num : number){
        ctx.font = "15px Pangolin";
        ctx.fillStyle = "black";
        ctx.fillText(`${num}`, x - 23, y - 20);
    }

}

class CheckablePixel extends PixelNumber {
    correctColor : string;
    allowColoring : boolean;

    constructor(xCoordinate : number, yCoordinate : number, color: string = "black", num : number, correctColor : string) {
        super(xCoordinate, yCoordinate, color, num);
        this.correctColor = correctColor;
        this.allowColoring = true;
    }

    makeOrColorGrid(xMin : number, yMin : number, xMax : number, yMax : number, inc : number) {
        if (this.allowColoring === true) {
            if (this.color === this.correctColor) {
                super.makeOrColorGrid(xMin, yMin, xMax, yMax, inc);
                this.allowColoring = false;
            } else {
                super.changeColor("white")
                super.makeOrColorGrid(xMin, yMin, xMax, yMax, inc);
                ctx.fillStyle = "black";
                ctx.fillText(`X${this.num}X`, this.xCoordinate - 32, this.yCoordinate - 15);
            }
        }
    }

}
