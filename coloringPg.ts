let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let pairsList = [];

for(let i = 0; i <= canvas.height; i += 40){
    for (let j = 0; j <= canvas.width; j += 40){
        pairsList.push([i,j])
    }
}

function draw(x : number = 0, y : number = 0, color? : string) : void {
    ctx.beginPath();
    ctx.fillStyle = color || "black";
    ctx.arc(x, y, 1, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function makeGrid(startX : number, startY : number, x : number, y : number, inc : number) : void {
    // vertical lines
    for (let xValue = startX; xValue <= x; xValue += inc){
        for (let yValue = startY; yValue <= y; yValue++){
            draw(xValue, yValue);
        }
    }

    // horizontal lines
    for (let yValue = startY; yValue <= y; yValue += inc){ 
        for (let xValue = startX; xValue <= x; xValue++){
            draw(xValue, yValue);
        }
    }
}

makeGrid(0, 0, canvas.width, canvas.height, 40)

canvas.addEventListener("click", function (event : MouseEvent){

    for (const p of pairsList){
        if ((event.offsetX <= p[0] && event.offsetX >= p[0] - 40) && (event.offsetY <= p[1] && event.offsetY >= p[1] - 40)){
            makeGrid(p[0] - 40, p[1] - 40, p[0], p[1], 1);
        }
    }

    // if (event.offsetX <= 40 && event.offsetY <= 40){
    //     makeGrid(40, 40, 1);
    // }
});

// heredity : transmission of traits from one generation to next
// character : heritable feature that varies among individuals
// trait : variant for a character