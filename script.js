let translateInput = document.querySelector('#textarea');

let translateOutput = document.querySelector('#output');

const translateBtn = document.querySelector('#btn-translate');

const serverUrl = 'https://api.funtranslations.com/translate/minion.json';

function createURL() {
  return `${serverUrl}?text=${translateInput.value}`;
}

translateBtn.addEventListener('click', () => {
  console.log(translateInput.value);
  if (translateInput.value != '') {
    fetch(createURL(translateInput.value))
      .then(response => response.json())
      .then(json => {
        console.log(json.contents);
        translateOutput.innerHTML = json.contents.translated;
      })
      .catch(() => alert('someting went wrong!!'));
  } else {
    translateOutput.innerHTML = 'please enter something';
    setInterval(() => {
      translateOutput.innerHTML = '';
    }, 2500);
  }
});
