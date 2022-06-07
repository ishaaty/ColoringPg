"use strict";
// to be "merged" with pictureArray and eventHandlers
// purpose of taking the button clicked on the first screen and making the requested array
let freeplayBtn = document.querySelector("#freeplay");
let randBtn = document.querySelector("#surprise");
let options = [];
document.querySelectorAll(".pgSelection").forEach(function (elm) {
    options.push(elm.dataset.key);
    elm.addEventListener("click", function (event) {
        let coloringPg = event.currentTarget;
        addToStorage(coloringPg.dataset.key);
    });
    console.log(options);
});
randBtn.addEventListener("click", function () {
    addToStorage(options[Math.floor(Math.random() * 2)]);
});
freeplayBtn.addEventListener("click", function () {
    addToStorage("freeplay");
});
function addToStorage(correct) {
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
    console.log(options);
}
