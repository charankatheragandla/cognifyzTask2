

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let button = document.getElementById("button");
let bgContainer = document.getElementById("bgContainer");



function onClick() {
    let colorLength = bgColorsArray.length;
    let randomColor = Math.ceil(Math.random() * colorLength);
    if (randomColor === colorLength) {
        randomColor = colorLength - 1;
    }
    let randomBgColor = bgColorsArray[randomColor];
    bgContainer.style.backgroundColor = randomBgColor;
}