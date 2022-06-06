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

freeplayBtn.addEventListener("click", function() {
    idk("freeplay");
})

rainbowHeartBtn.addEventListener("click", function() {
    idk("rainbowHeart");
})

okBtn.addEventListener("click", function (){
    idk("ok");
})

function idk(correct : string) : void{
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
}