const nameUser = document.querySelector('#txt-name');
const userAge = document.querySelector('#txt-age');
const btnCalculate = document.querySelector('#btn-calculate');
const resolve = document.querySelector('#p-resolve');

btnCalculate.addEventListener('click', calculate_age);

function calculate_age() {
  
  const user = nameUser.value;
  
  let current_year = new Date();

  let birthday = userAge.value;
  birthday = birthday.split('-');
  let myBirthday = birthday.map(element=> Number(element));
  
  let year = current_year.getFullYear() - myBirthday[0];
  let month = (current_year.getMonth()+1) - myBirthday[1];
  let day = (current_year.getDate()) - myBirthday[2];
    
  if (year > 18) {
    resolve.textContent = `Sr@ ${user}, usted puede votar`;
    resolve.style.color = '#008000';
    resolve.style.backgroundColor = '#6de3f8';
  } else if (year===18 && month>0) {
    resolve.textContent = `Sr@ ${user}, usted puede votar`;
    resolve.style.color = '#008000';
    resolve.style.backgroundColor = '#6de3f8';
  } else if (year===18 && month ===0 && day >=0) {
    resolve.textContent = `Sr@ ${user}, usted puede votar`;
    resolve.style.color = '#008000';
    resolve.style.backgroundColor = '#6de3f8';
  } else {
    resolve.textContent = `Sr@ ${user}, usted NO puede votar`;
    resolve.style.color = '#800606';    
  }
}