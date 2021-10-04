const nameUser = document.querySelector('#txt-name');
const useAge = document.querySelector('#txt-age');
const btnCalculate = document.querySelector('#btn-calculate');
const resolve = document.querySelector('#p-resolve');

btnCalculate.addEventListener('click', calculate_age);

function calculate_age() {
  const user = nameUser.value;
  const age = Number(useAge.value);
  console.log(age);
  console.log(typeof age);

  if (age >= 18) {
    resolve.textContent = `Sr@ ${user}, usted puede votar`;
    resolve.style.color = '#008000';
    resolve.style.backgroundColor = '#6de3f8';
    console.log('bien');
  } else {
    resolve.textContent = `Sr@ ${user}, usted NO puede votar`;
    resolve.style.color = '#800606';
    console.log('Mal');
  }
}
