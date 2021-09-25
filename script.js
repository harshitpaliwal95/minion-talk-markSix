const btnTranslate = document.getElementById('btn-translate');

function callback() {
  console.log('clicked');
  console.log('input', input.value);
}
btnTranslate.addEventListener('click', callback);

const input = document.querySelector('#txt-input');
