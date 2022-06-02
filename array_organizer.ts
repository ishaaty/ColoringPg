// to be "merged" with pictureArray and eventHandlers
// purpose of taking the button clicked on the first screen and making the requested array
let freeplayBtn = document.querySelector("#freeplay") as HTMLButtonElement;
let rainbowHeartBtn = document.querySelector("#rainbowHeart") as HTMLButtonElement;
var correct : string = "";

freeplayBtn.addEventListener("click", function() {
    correct = "freeplay";
    sessionStorage.setItem("first", correct);
    location.href = "./index.html";
})

rainbowHeartBtn.addEventListener("click", function() {
    correct = "rainbowHeart";
    sessionStorage.setItem("first", correct);
    location.href = "./index.html";
})