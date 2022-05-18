let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let pairsList = [];
let color = "black";


document.querySelectorAll<HTMLElement>(".colorBtn").forEach(function(elm){
    elm.addEventListener("click", function (event : MouseEvent){
        let clickedColor = event.currentTarget as HTMLElement;
        color = clickedColor.dataset.key;
    })
});


for(let i = 0; i <= canvas.height; i += 40){
    for (let j = 0; j <= canvas.width; j += 40){
        pairsList.push([i,j]);
    }
}

function draw(x : number = 0, y : number = 0, c : string) : void {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, 1, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function makeGrid(startX : number, startY : number, x : number, y : number, inc : number) : void {
    // vertical lines
    for (let xValue = startX; xValue < x; xValue += inc){
        for (let yValue = startY; yValue < y; yValue++){
            draw(xValue, yValue, color);
        }
    }

    // horizontal lines
    for (let yValue = startY; yValue < y; yValue += inc){ 
        for (let xValue = startX; xValue < x; xValue++){
            draw(xValue, yValue, color);
        }
    }
}

makeGrid(0, 0, canvas.width, canvas.height, 40);

for (const p of pairsList){
    color = "white";
    makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
    color = "black";
}

canvas.addEventListener("click", function (event : MouseEvent){
    for (const p of pairsList){
        if ((event.offsetX <= p[0] && event.offsetX >= p[0] - 40) && (event.offsetY <= p[1] && event.offsetY >= p[1] - 40)){
            makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
        }
    }
});


ctx.font = "15px Calibri";
ctx.fillStyle = "black";
ctx.fillText("1", 17, 25);



