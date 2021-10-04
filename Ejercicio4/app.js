const selectColor = document.querySelector('#ChangeColor');
const container = document.querySelector('.container');
const input_color = document.querySelector('#txt-color');

selectColor.addEventListener('change',changeColor);
input_color.addEventListener('keyup', changetxtColor)

function changeColor() {  
  container.style.backgroundColor = selectColor.value;
}

function changetxtColor() {
  console.log(input_color.value);
  container.style.backgroundColor = input_color.value;
}