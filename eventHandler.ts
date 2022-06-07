let currentColor = document.querySelector("#currentColor") as HTMLParagraphElement;
let clearBtn = document.querySelector("#clear") as HTMLButtonElement;
let cor = sessionStorage.getItem("first") as string;
let color : string = "black";
let bol : boolean = true;
let pixelsList = [];
let selectedArray = [];

// sets selected array
if (cor === "freeplay") {
    selectedArray = freeplayArray;
}
if (cor === "rainbowHeart") {
    selectedArray = rainbowHeartArray;
}
if (cor === "ok"){
    selectedArray = okArray;
}
if (cor === "helloWorld") {
    selectedArray = helloWorldArray;
    console.log(helloWorldArray);
}

// filling pairsList for freeplay screen
for(let x = 0; x <= canvas.height; x += 40){
    for (let y = 0; y <= canvas.width; y += 40){
        let pixel : Pixel = new Pixel(x, y, color);
        pixelsList.push(pixel);
    }
}

window.addEventListener("load", function () {
    // creating the grid
    let pixelGrid : Pixel = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);

    // filling the grid with numbers
    for (const r of selectedArray){
        if (r.constructor.name === "CheckablePixel") {
            r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
        }
    }
});

// changing color
document.querySelectorAll<HTMLElement>(".colorBtn").forEach(function(elm){
    elm.addEventListener("click", function (event : MouseEvent){
        let clickedColor = event.currentTarget as HTMLElement;
        currentColor.textContent = (`Current Color: ${clickedColor.textContent}`);
        for (const p of selectedArray){
            p.changeColor(clickedColor.dataset.key);
        }
    })
});

// coloring in a pixel when user clicks
canvas.addEventListener("click", function(event : MouseEvent){
    for (const p of selectedArray){
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)){
            console.log(`${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
        }
    }
});

// uncolors pixel
canvas.addEventListener("dblclick", function(event : MouseEvent){
    for (const p of selectedArray){
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)){
            console.log(`Unclicked ${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1, "white");
            if (p.constructor.name === "CheckablePixel"){
                p.insertNum(p.xCoordinate, p.yCoordinate, p.num);
            }
        }
    }
})

clearBtn.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //repetitive, make it a function
    let pixelGrid : Pixel = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);

    // re-inserts num into grid
    for (const r of selectedArray){
        if (r.constructor.name === "CheckablePixel") {
            r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
        }
    }

})