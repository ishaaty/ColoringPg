"use strict";
// import * as fs from 'fs';
// import * as path from 'path';
// fs.readFile(path.join(__dirname, "picturesBtns.txt"), (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
// to be "merged" with pictureArray and eventHandlers
// purpose of taking the button clicked on the first screen and making the requested array
let freeplayBtn = document.querySelector("#freeplay");
let rainbowHeartBtn = document.querySelector("#rainbowHeart");
let okBtn = document.querySelector("#ok");
let randBtn = document.querySelector("#surprise");
let helloWorldBtn = document.querySelector("#helloWorld");
let options = ["rainbowHeart", "ok"];
freeplayBtn.addEventListener("click", function () {
    addToStorage("freeplay");
});
rainbowHeartBtn.addEventListener("click", function () {
    addToStorage("rainbowHeart");
});
okBtn.addEventListener("click", function () {
    addToStorage("ok");
});
randBtn.addEventListener("click", function () {
    addToStorage(options[Math.floor(Math.random() * 2)]);
});
helloWorldBtn.addEventListener("click", function () {
    addToStorage("helloWorld");
});
function addToStorage(correct) {
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
}
