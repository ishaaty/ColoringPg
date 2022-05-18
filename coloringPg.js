var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
// const redBtn = document.querySelector("#red") as HTMLButtonElement;
// const orangeBtn = document.querySelector("#orange") as HTMLButtonElement;
// const yellowBtn = document.querySelector("#yellow") as HTMLButtonElement;
// const greenBtn = document.querySelector("#green") as HTMLButtonElement;
// const blueBtn = document.querySelector("#blue") as HTMLButtonElement;
// const purpleBtn = document.querySelector("#purple") as HTMLButtonElement;
// const pinkBtn = document.querySelector("#pink") as HTMLButtonElement;
// const whiteBtn = document.querySelector("#white") as HTMLButtonElement;
// const blackBtn = document.querySelector("#black") as HTMLButtonElement;
// const clearBtn = document.querySelector("#clear") as HTMLButtonElement;
var pairsList = [];
var color = "black";
// document.querySelectorAll<HTMLElement>(".colorBtn").forEach(function(elm){
//     color = elm.dataset.color;
//   })
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        var clickedColor = event.currentTarget;
        color = clickedColor.dataset.key;
    });
});
for (var i = 0; i <= canvas.height; i += 40) {
    for (var j = 0; j <= canvas.width; j += 40) {
        pairsList.push([i, j]);
    }
}
function draw(x, y, c) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
function makeGrid(startX, startY, x, y, inc) {
    // vertical lines
    for (var xValue = startX; xValue < x; xValue += inc) {
        for (var yValue = startY; yValue < y; yValue++) {
            draw(xValue, yValue, color);
        }
    }
    // horizontal lines
    for (var yValue = startY; yValue < y; yValue += inc) {
        for (var xValue = startX; xValue < x; xValue++) {
            draw(xValue, yValue, color);
        }
    }
}
makeGrid(0, 0, canvas.width, canvas.height, 40);
for (var _i = 0, pairsList_1 = pairsList; _i < pairsList_1.length; _i++) {
    var p = pairsList_1[_i];
    color = "white";
    makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
    color = "black";
}
canvas.addEventListener("click", function (event) {
    for (var _i = 0, pairsList_2 = pairsList; _i < pairsList_2.length; _i++) {
        var p = pairsList_2[_i];
        if ((event.offsetX <= p[0] && event.offsetX >= p[0] - 40) && (event.offsetY <= p[1] && event.offsetY >= p[1] - 40)) {
            makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
        }
    }
});
// redBtn.addEventListener("click", function (event : MouseEvent){
//     color = "red";
// });
// orangeBtn.addEventListener("click", function (event : MouseEvent){
//     color = "orange";
// });
// yellowBtn.addEventListener("click", function (event : MouseEvent){
//     color = "yellow";
// });
// greenBtn.addEventListener("click", function (event : MouseEvent){
//     color = "green";
// });
// blueBtn.addEventListener("click", function (event : MouseEvent){
//     color = "blue";
// });
// purpleBtn.addEventListener("click", function (event : MouseEvent){
//     color = "purple";
// });
// pinkBtn.addEventListener("click", function (event : MouseEvent){
//     color = "pink";
// });
// whiteBtn.addEventListener("click", function (event : MouseEvent){
//     color = "white";
// });
// blackBtn.addEventListener("click", function (event : MouseEvent){
//     color = "black";
// });
// clearBtn.addEventListener("click", function (event : MouseEvent){
//     color = "white";
//     for (const p of pairsList){
//         makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
//     }
// });
