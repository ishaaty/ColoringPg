let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


let pairsList = [];

for(let i = 0; i <= canvas.height; i += 40){
    for (let j = 0; j <= canvas.width; j += 40){
        pairsList.push([i,j])
    }
}


function draw(x : number = 0, y : number = 0) : void {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(x, y, 1, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}


function makeGrid(x : number, y : number, inc : number) : void {
    // vertical lines
    for (let xValue = 0; xValue <= x; xValue += inc){
        for (let yValue = 0; yValue <= y; yValue++){
            draw(xValue, yValue);
        }
    }

    // horizontal lines
    for (let yValue = 0; yValue <= y; yValue += inc){ 
        for (let xValue = 0; xValue <= x; xValue++){
            draw(xValue, yValue);
        }
    }
}

makeGrid(canvas.width, canvas.height, 40)

canvas.addEventListener("click", function (event : MouseEvent){

    // for (let i = 0; i <= pairsList.length; i++)

    if (event.offsetX <= 40 && event.offsetY <= 40){
        makeGrid(40, 40, 1);
    }
});

// heredity : transmission of traits from one generation to next
// character : heritable feature that varies among individuals
// trait : variant for a character