var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var pairsList = [];
for (var i = 0; i <= canvas.height; i += 40) {
    for (var j = 0; j <= canvas.width; j += 40) {
        pairsList.push([i, j]);
    }
}
function draw(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
function makeGrid(startX, startY, x, y, inc) {
    // vertical lines
    for (var xValue = startX; xValue <= x; xValue += inc) {
        for (var yValue = startY; yValue <= y; yValue++) {
            draw(xValue, yValue);
        }
    }
    // horizontal lines
    for (var yValue = startY; yValue <= y; yValue += inc) {
        for (var xValue = startX; xValue <= x; xValue++) {
            draw(xValue, yValue);
        }
    }
}
makeGrid(0, 0, canvas.width, canvas.height, 40);
canvas.addEventListener("click", function (event) {
    for (var _i = 0, pairsList_1 = pairsList; _i < pairsList_1.length; _i++) {
        var p = pairsList_1[_i];
        if ((event.offsetX <= p[0] && event.offsetX >= p[0] - 40) && (event.offsetY <= p[1] && event.offsetY >= p[1] - 40)) {
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
