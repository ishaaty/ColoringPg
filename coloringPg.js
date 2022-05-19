var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var pairsList = [];
var color = "black";
for (var i = 0; i <= canvas.height; i += 40) {
    for (var j = 0; j <= canvas.width; j += 40) {
        pairsList.push([i, j]);
    }
}
console.log(pairsList);
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        var clickedColor = event.currentTarget;
        color = clickedColor.dataset.key;
    });
});
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
ctx.font = "15px Calibri";
ctx.fillStyle = "black";
ctx.fillText("1", 17, 25);
