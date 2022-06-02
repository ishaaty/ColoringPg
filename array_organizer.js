// to be "merged" with pictureArray and eventHandlers
// purpose of taking the button clicked on the first screen and making the requested array
var freeplayBtn = document.querySelector("#freeplay");
var rainbowHeartBtn = document.querySelector("#rainbowHeart");
var correct = "";
freeplayBtn.addEventListener("click", function () {
    correct = "freeplay";
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
});
rainbowHeartBtn.addEventListener("click", function () {
    correct = "rainbowHeart";
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
});
