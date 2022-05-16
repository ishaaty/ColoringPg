let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const redBtn = document.querySelector("#red") as HTMLButtonElement;
const orangeBtn = document.querySelector("#orange") as HTMLButtonElement;
const yellowBtn = document.querySelector("#yellow") as HTMLButtonElement;
const greenBtn = document.querySelector("#green") as HTMLButtonElement;
const blueBtn = document.querySelector("#blue") as HTMLButtonElement;
const purpleBtn = document.querySelector("#purple") as HTMLButtonElement;
const pinkBtn = document.querySelector("#pink") as HTMLButtonElement;
const whiteBtn = document.querySelector("#white") as HTMLButtonElement;
const blackBtn = document.querySelector("#black") as HTMLButtonElement;
const clearBtn = document.querySelector("#clear") as HTMLButtonElement;

let pairsList = [];
let color = "black";

for(let i = 0; i <= canvas.height; i += 40){
    for (let j = 0; j <= canvas.width; j += 40){
        pairsList.push([i,j])
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

makeGrid(0, 0, canvas.width, canvas.height, 40)

canvas.addEventListener("click", function (event : MouseEvent){
    for (const p of pairsList){
        if ((event.offsetX <= p[0] && event.offsetX >= p[0] - 40) && (event.offsetY <= p[1] && event.offsetY >= p[1] - 40)){
            makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
        }
    }
});


redBtn.addEventListener("click", function (event : MouseEvent){
    color = "red";
});

orangeBtn.addEventListener("click", function (event : MouseEvent){
    color = "orange";
});

yellowBtn.addEventListener("click", function (event : MouseEvent){
    color = "yellow";
});

greenBtn.addEventListener("click", function (event : MouseEvent){
    color = "green";
});

blueBtn.addEventListener("click", function (event : MouseEvent){
    color = "blue";
});

purpleBtn.addEventListener("click", function (event : MouseEvent){
    color = "purple";
});

pinkBtn.addEventListener("click", function (event : MouseEvent){
    color = "pink";
});

whiteBtn.addEventListener("click", function (event : MouseEvent){
    color = "white";
});

blackBtn.addEventListener("click", function (event : MouseEvent){
    color = "black";
});

clearBtn.addEventListener("click", function (event : MouseEvent){
    color = "white";
    for (const p of pairsList){
        makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
    }
});

// heredity : transmission of traits from one generation to next
// character : heritable feature that varies among individuals
// trait : variant for a character






