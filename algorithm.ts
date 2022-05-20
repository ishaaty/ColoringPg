let pairsDict = {};

for(let i = 0; i <= canvas.height; i += 40){
    for (let j = 0; j <= canvas.width; j += 40){
        // pairsList.push([i,j]);
    }
}


class Pixels {
    xCoordinate : number;
    yCoordinate : number;

    constructor (xCoordinate : number, yCoordinate : number){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }

    draw() {
        // add the rest of draw
        this.fill("white");
    }

    fill(c : string) {
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.arc(this.xCoordinate, this.yCoordinate, 1, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }

}