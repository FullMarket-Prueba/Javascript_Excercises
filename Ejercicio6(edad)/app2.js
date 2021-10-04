const nameUser = document.querySelector('#txt-name');
const userAge = document.querySelector('#txt-age');
const btnCalculate = document.querySelector('#btn-calculate');
const resolve = document.querySelector('#p-resolve');

btnCalculate.addEventListener('click', calculate_age);

function calculate_age() {  
  let today = new Date();
  let birthday = userAge.value.split('-');
  let myBirthday = new Date(`${birthday[0]}-${birthday[1]}-${Number(birthday[2])+1}`);

  let current_age = today.getFullYear() - myBirthday.getFullYear();
  let month_difference = (today.getMonth()) - myBirthday.getMonth();
  let day_difference = today.getDay() - myBirthday.getDay();

   if (month_difference >= 0 && day_difference >=0) {
    console.log(current_age);
  } else {
    console.log(current_age-1);
  }
}