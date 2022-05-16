var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var redBtn = document.querySelector("#red");
var orangeBtn = document.querySelector("#orange");
var yellowBtn = document.querySelector("#yellow");
var greenBtn = document.querySelector("#green");
var blueBtn = document.querySelector("#blue");
var purpleBtn = document.querySelector("#purple");
var pinkBtn = document.querySelector("#pink");
var whiteBtn = document.querySelector("#white");
var blackBtn = document.querySelector("#black");
var clearBtn = document.querySelector("#clear");
var pairsList = [];
var color = "black";
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
canvas.addEventListener("click", function (event) {
    for (var _i = 0, pairsList_1 = pairsList; _i < pairsList_1.length; _i++) {
        var p = pairsList_1[_i];
        if ((event.offsetX <= p[0] && event.offsetX >= p[0] - 40) && (event.offsetY <= p[1] && event.offsetY >= p[1] - 40)) {
            makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
        }
    }
});
redBtn.addEventListener("click", function (event) {
    color = "red";
});
orangeBtn.addEventListener("click", function (event) {
    color = "orange";
});
yellowBtn.addEventListener("click", function (event) {
    color = "yellow";
});
greenBtn.addEventListener("click", function (event) {
    color = "green";
});
blueBtn.addEventListener("click", function (event) {
    color = "blue";
});
purpleBtn.addEventListener("click", function (event) {
    color = "purple";
});
pinkBtn.addEventListener("click", function (event) {
    color = "pink";
});
whiteBtn.addEventListener("click", function (event) {
    color = "white";
});
blackBtn.addEventListener("click", function (event) {
    color = "black";
});
clearBtn.addEventListener("click", function (event) {
    color = "white";
    for (var _i = 0, pairsList_2 = pairsList; _i < pairsList_2.length; _i++) {
        var p = pairsList_2[_i];
        makeGrid(p[0] - 38, p[1] - 38, p[0] - 1, p[1] - 1, 1);
    }
});
// heredity : transmission of traits from one generation to next
// character : heritable feature that varies among individuals
// trait : variant for a character
