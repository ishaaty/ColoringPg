var color = "black";
var pixelsList = [];
// filling pairsList
for (var x = 0; x <= canvas.height; x += 40) {
    for (var y = 0; y <= canvas.width; y += 40) {
        var pixel = new Pixel(x, y, color);
        pixelsList.push(pixel);
    }
}
// console.log(pixelsList);
window.addEventListener("load", function () {
    // creating the grid
    var pixelGrid = pixelsList[0]; // contains coordinates (0,0)
    pixelGrid.changeColor("black");
    pixelGrid.makeOrColorGrid(0, 0, canvas.width, canvas.height, 40);
    // filling the grid with white squares
    for (var _i = 0, pixelsList_1 = pixelsList; _i < pixelsList_1.length; _i++) {
        var p = pixelsList_1[_i];
        p.changeColor("white");
        p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
        p.changeColor("black");
    }
});
// changing color
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        var clickedColor = event.currentTarget;
        for (var _i = 0, pixelsList_2 = pixelsList; _i < pixelsList_2.length; _i++) {
            var p = pixelsList_2[_i];
            p.changeColor(clickedColor.dataset.key);
            console.log("Changed color to ".concat(clickedColor.dataset.key, " !"));
        }
    });
});
// to color in pixel when user clicks
canvas.addEventListener("click", function (event) {
    for (var _i = 0, pixelsList_3 = pixelsList; _i < pixelsList_3.length; _i++) {
        var p = pixelsList_3[_i];
        if ((event.offsetX <= p.xCoordinate && event.offsetX >= p.xCoordinate - 40) && (event.offsetY <= p.yCoordinate && event.offsetY >= p.yCoordinate - 40)) {
            p.makeOrColorGrid(p.xCoordinate - 38, p.yCoordinate - 38, p.xCoordinate - 1, p.yCoordinate - 1, 1);
            console.log("Clicked canvas!");
        }
    }
});
