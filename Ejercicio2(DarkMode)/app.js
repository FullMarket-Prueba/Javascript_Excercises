const btnOff = document.querySelector('#btnOff');
const btnOn = document.querySelector('#btnOn');

btnOff.addEventListener('click',modeDark);
btnOn.addEventListener('click',modeLight);

function modeDark() {
  console.log('Funciona');
  btnOff.style.display = 'none';
  btnOn.style.display = 'block';
  document.body.style.backgroundColor = '#292929';
}

function modeLight() {
  console.log('Funciona');
  btnOff.style.display = 'block';
  btnOn.style.display = 'none';
  document.body.style.backgroundColor = '#ffff';
}