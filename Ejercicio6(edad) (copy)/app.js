const nameUser = document.querySelector('#txt-name');
const useAge = document.querySelector('#txt-age');
const btnCalculate = document.querySelector('#btn-calculate');
const resolve = document.querySelector('#p-resolve');
const color = document.querySelector('#input-color');

btnCalculate.addEventListener('click', calculate_age);
useAge.addEventListener('keyup', validate_age);

// La función keyCode sirve para identificar distintos tipos de teclas
// https://keycode.info/

function validate_age(e) {
  if (e.keyCode === 13) {
    calculate_age();
  }
}

function calculate_age() {
  const user = nameUser.value;
  const age = Number(useAge.value);
  console.log(color.value);
  console.log(typeof color.value);
  
  if (age >= 18) {
    resolve.textContent = `Sr@ ${user}, usted puede votar`;
    resolve.style.color = '#008000';
    resolve.style.backgroundColor = '#6de3f8';    
  } else {
    resolve.textContent = `Sr@ ${user}, usted NO puede votar`;
    resolve.style.color = '#800606';    
  }
}
