var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#user-input");
var outputDiv = document.querySelector("#output-div")

var url = "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text) {
    return url + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occurred.", error)
    alert("Something went wrong with server! Try again after some time.")
}

function fetchTranslatedText(text) {
    fetch(constructUrl(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            console.log(json)
        })
        .catch(errorHandler)
}

function clickHandler() {
    var inputText = userInput.value;
    fetchTranslatedText(inputText);
}

btnTranslate.addEventListener("click", clickHandler);