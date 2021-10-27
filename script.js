//vairables
let translateInput = document.querySelector('#textarea');

let translateOutput = document.querySelector('#output');

const translateBtn = document.querySelector('#btn-translate');

const serverUrl = 'https://api.funtranslations.com/translate/minion.json';


function createURL() {
  return `${serverUrl}?text=${translateInput.value}`;
}

function errorHandler() {
  translateOutput.innerHTML = 'somthing went wrong with server';
  alert('someting went wrong!!');
  setTimeout(() => {
    translateOutput.innerHTML = '';
  }, 2500);
}

translateBtn.addEventListener('click', () => {
  if (translateInput.value != '') {
    fetch(createURL(translateInput.value))
      .then(response => response.json())
      .then(json => {
        console.log(json.contents);
        translateOutput.innerHTML = json.contents.translated;
      })
      .catch(errorHandler);
  } else {
    translateOutput.innerHTML = 'please enter something';
    setInterval(() => {
      translateOutput.innerHTML = '';
    }, 2500);
  }
});
