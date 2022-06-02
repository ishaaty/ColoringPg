"use strict";
let cor = sessionStorage.getItem("first");
let color = "black";
let pixelsList = [];
let currentColor = document.querySelector("#currentColor");
let selectedArray = [];
if (cor === "freeplay") {
    selectedArray = freeplayArray;
}
if (cor === "rainbowHeart") {
    selectedArray = rainbowHeartArray;
}
// filling pairsList
for (var x = 0; x <= canvas.height; x += 40) {
    for (var y = 0; y <= canvas.width; y += 40) {
        var pixel = new Pixel(x, y, color);
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
    var pixelGrid = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);
    // filling the grid with white squares
<<<<<<< HEAD
    for (const r of selectedArray) {
        if (r.constructor.name === "CheckablePixel") {
            r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
        }
=======
    for (var _i = 0, rainbowHeartArray_1 = rainbowHeartArray; _i < rainbowHeartArray_1.length; _i++) {
        var r = rainbowHeartArray_1[_i];
        r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
>>>>>>> ccc758d9121d84d790d253373b9b699e7c31f784
    }
});
// changing color
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
<<<<<<< HEAD
        let clickedColor = event.currentTarget;
        currentColor.textContent = (`Current Color: ${clickedColor.textContent}`);
        for (const p of selectedArray) {
=======
        var clickedColor = event.currentTarget;
        currentColor.textContent = ("Current Color: ".concat(clickedColor.textContent));
        for (var _i = 0, rainbowHeartArray_2 = rainbowHeartArray; _i < rainbowHeartArray_2.length; _i++) {
            var p = rainbowHeartArray_2[_i];
>>>>>>> ccc758d9121d84d790d253373b9b699e7c31f784
            p.changeColor(clickedColor.dataset.key);
        }
    });
});
// // coloring in a pixel when user clicks
// canvas.addEventListener("click", function (event : MouseEvent){
//     for (const p of pixelsList){
//         if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)){
//             console.log(`${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
//             p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
//         }
//     }
// });
// coloring in a pixel when user clicks
canvas.addEventListener("click", function (event) {
<<<<<<< HEAD
    for (const p of selectedArray) {
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            console.log(`${p.color}: (${p.xCoordinate}, ${p.yCoordinate})`);
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
=======
    for (var _i = 0, rainbowHeartArray_3 = rainbowHeartArray; _i < rainbowHeartArray_3.length; _i++) {
        var p = rainbowHeartArray_3[_i];
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            console.log("".concat(p.color, ": (").concat(p.xCoordinate, ", ").concat(p.yCoordinate, ")"));
            p.checkColor(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
>>>>>>> ccc758d9121d84d790d253373b9b699e7c31f784
        }
    }
});
