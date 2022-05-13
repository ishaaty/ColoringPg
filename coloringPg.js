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
function makeGrid(x, y, inc) {
    // vertical lines
    for (var xValue = 0; xValue <= x; xValue += inc) {
        for (var yValue = 0; yValue <= y; yValue++) {
            draw(xValue, yValue);
        }
    }
    // horizontal lines
    for (var yValue = 0; yValue <= y; yValue += inc) {
        for (var xValue = 0; xValue <= x; xValue++) {
            draw(xValue, yValue);
        }
    }
}
makeGrid(canvas.width, canvas.height, 40);
canvas.addEventListener("click", function (event) {
    // for (let i = 0; i <= pairsList.length; i++)
    if (event.offsetX <= 40 && event.offsetY <= 40) {
        makeGrid(40, 40, 1);
    }
});
// heredity : transmission of traits from one generation to next
// character : heritable feature that varies among individuals
// trait : variant for a character
