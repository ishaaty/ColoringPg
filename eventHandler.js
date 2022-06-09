"use strict";
let currentColor = document.querySelector("#currentColor");
let clearBtn = document.querySelector("#clear");
let cor = sessionStorage.getItem("first");
let color = "black";
let bol = true;
let pixelsList = [];
let selectedArray = [];
// sets selected array
if (cor === "freeplay") {
    selectedArray = freeplayArray;
}
if (cor === "rainbowHeart") {
    selectedArray = rainbowHeartArray;
}
if (cor === "ok") {
    selectedArray = okArray;
}
if (cor === "helloWorld") {
    selectedArray = helloWorldArray;
    console.log(helloWorldArray);
}
if (cor === "sus") {
    selectedArray = susArray;
}
// filling pixelsList for freeplay screen
for (let x = 0; x <= canvas.height; x += 40) {
    for (let y = 0; y <= canvas.width; y += 40) {
        let pixel = new Pixel(x, y, color);
        pixelsList.push(pixel);
    }
}
window.addEventListener("load", function () {
    // creating the grid
    let pixelGrid = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);
    // filling the grid with numbers
    for (const r of selectedArray) {
        if (r.constructor.name === "CheckablePixel") {
            r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
        }
    }
});
// changing color
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        let clickedColor = event.currentTarget;
        currentColor.textContent = (`Current Color: ${clickedColor.textContent}`);
        for (const p of selectedArray) {
            p.changeColor(clickedColor.dataset.key);
        }
    });
});
function colorPixel(event) {
    for (const p of selectedArray) {
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            console.log(`${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
        }
    }
}
// coloring in a pixel when user clicks
canvas.addEventListener("mousedown", function (event) {
    colorPixel(event);
    canvas.addEventListener("mousemove", colorPixel);
});
canvas.addEventListener("mouseup", function () {
    canvas.removeEventListener("mousemove", colorPixel);
});
// uncolors pixel
canvas.addEventListener("dblclick", function (event) {
    if (selectedArray !== freeplayArray) {
        return;
    }
    for (const p of selectedArray) {
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1, "white");
            console.log(`Unclicked ${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
        }
    }
});
clearBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //repetitive, make it a function
    let pixelGrid = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);
    if (selectedArray === freeplayArray) {
        return;
    }
    // re-inserts num into grid if its not the freeplayArray
    for (const r of selectedArray) {
        r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
    }
});
