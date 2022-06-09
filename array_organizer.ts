// to be "merged" with pictureArray and eventHandlers
// purpose of taking the button clicked on the first screen and making the requested array
let freeplayBtn = document.querySelector("#freeplay") as HTMLButtonElement;
let randBtn = document.querySelector("#surprise") as HTMLButtonElement;
let options : string[] = [];


document.querySelectorAll<HTMLElement>(".pgSelection").forEach(function(elm){
    options.push(elm.dataset.key)
    elm.addEventListener("click", function (event : MouseEvent){
        let coloringPg = event.currentTarget as HTMLElement;
        addToStorage(coloringPg.dataset.key);
    })
    console.log(options)
});


randBtn.addEventListener("click", function() {
    addToStorage(options[Math.floor(Math.random() * options.length)]);
})

freeplayBtn.addEventListener("click", function() {
    addToStorage("freeplay");
})


function addToStorage(correct : string) : void{
    sessionStorage.setItem("first", correct);
    location.href = "./screen.html";
    console.log(options)
}