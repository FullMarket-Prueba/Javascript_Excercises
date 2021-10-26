const btn_generate = document.querySelector('#btn-generate');
const container = document.querySelector('.container');

btn_generate.addEventListener('click', generate_color);

function generate_color() {
  let r = randomNum(0,255);
  let g = randomNum(0,255);
  let b = randomNum(0,255);

  container.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}