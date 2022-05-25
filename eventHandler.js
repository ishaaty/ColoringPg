"use strict";
let color = "black";
let pixelsList = [];
let currentColor = document.querySelector("#currentColor");
// filling pairsList
for (let x = 0; x <= canvas.height; x += 40) {
    for (let y = 0; y <= canvas.width; y += 40) {
        let pixel = new Pixel(x, y, color);
        pixelsList.push(pixel);
    }
}
// window.addEventListener("load", function () {
//     // creating the grid
//     let pixelGrid : Pixel = pixelsList[0]; // contains coordinates (0,0)
//     pixelGrid.changeColor("black");
//     pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);
//     // filling the grid with white squares
//     for (const p of pixelsList){
//         p.changeColor("white");
//         p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
//         p.changeColor("black");
//     }
// });
window.addEventListener("load", function () {
    // creating the grid
    let pixelGrid = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);
    // filling the grid with white squares
    for (const r of rainbowHeartArray) {
        r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
    }
});
// changing color
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        let clickedColor = event.currentTarget;
        currentColor.textContent = (`Current Color: ${clickedColor.textContent}`);
        for (const p of rainbowHeartArray) {
            p.changeColor(clickedColor.dataset.key);
        }
    });
});
// coloring in a pixel when user clicks
canvas.addEventListener("click", function (event) {
    for (const p of rainbowHeartArray) {
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            console.log(`${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
            p.checkColor(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
        }
    }
});
