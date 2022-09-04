const input = document.querySelector(".input_field");

const output = document.querySelector(".output_field");

const button = document.querySelector(".button");

let serverLink = "https://api.funtranslations.com/translate/minion.json";

const getTranslationURL = function (text) {
  return serverLink + "?" + "text=" + text;
};

const errorHandler = function () {
  alert("Error occured try after sometime.");
};

const clickHandler = function () {
  const userInput = input.value;
  // console.log(userInput);

  fetch(getTranslationURL(userInput))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      output.textContent = translatedText;
    })
    .catch(errorHandler);
};

button.addEventListener("click", clickHandler);
