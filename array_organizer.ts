// import * as fs from 'fs';
// import * as path from 'path';

// fs.readFile(path.join(__dirname, "picturesBtns.txt"), (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })



// to be "merged" with pictureArray and eventHandlers
// purpose of taking the button clicked on the first screen and making the requested array
let freeplayBtn = document.querySelector("#freeplay") as HTMLButtonElement;
let rainbowHeartBtn = document.querySelector("#rainbowHeart") as HTMLButtonElement;
let okBtn = document.querySelector("#ok") as HTMLButtonElement;
let randBtn = document.querySelector("#surprise") as HTMLButtonElement;
let helloWorldBtn = document.querySelector("#helloWorld") as HTMLButtonElement;
let options : string[] = ["rainbowHeart", "ok", "helloWorld"];

freeplayBtn.addEventListener("click", function() {
    addToStorage("freeplay");
})

rainbowHeartBtn.addEventListener("click", function() {
    addToStorage("rainbowHeart");
})

okBtn.addEventListener("click", function (){
    addToStorage("ok");
})

randBtn.addEventListener("click", function() {
    addToStorage(options[Math.floor(Math.random() * 3)]);
})

helloWorldBtn.addEventListener("click", function() {
    addToStorage("helloWorld");
})

function addToStorage(correct : string) : void{
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
}