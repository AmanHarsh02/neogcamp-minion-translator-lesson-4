var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#user-input");
var outputDiv = document.querySelector("#output-div")

function clickHandler() {
    outputDiv.innerText = inputText.value
}

btnTranslate.addEventListener("click", clickHandler);