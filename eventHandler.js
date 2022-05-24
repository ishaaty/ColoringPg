var color = "black";
var pixelsList = [];
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
    for (var _i = 0, rainbowHeartArray_1 = rainbowHeartArray; _i < rainbowHeartArray_1.length; _i++) {
        var r = rainbowHeartArray_1[_i];
        r.insertNum(r.xCoordinate, r.yCoordinate, r.num);
    }
});
// changing color
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        var clickedColor = event.currentTarget;
        for (var _i = 0, pixelsList_1 = pixelsList; _i < pixelsList_1.length; _i++) {
            var p = pixelsList_1[_i];
            p.changeColor(clickedColor.dataset.key);
        }
    });
});
// coloring in a pixel when user clicks
canvas.addEventListener("click", function (event) {
    for (var _i = 0, pixelsList_2 = pixelsList; _i < pixelsList_2.length; _i++) {
        var p = pixelsList_2[_i];
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            console.log("".concat(p.color, ": (").concat(p.xCoordinate, ", ").concat(p.yCoordinate, ")"));
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
        }
    }
});
