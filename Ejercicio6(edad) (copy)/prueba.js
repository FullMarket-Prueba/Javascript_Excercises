const nameUser = document.getElementById('txt-name');
const date_birthday = document.getElementById('input-age');
const btn_calculate = document.getElementById('btn-calculate');
const resolve = document.getElementById('p-resolve');

btn_calculate.addEventListener('click',calculate_age);

function calculate_age() {

  let birthday_user = date_birthday.value;
  console.log(birthday_user);
  
  let birthday = birthday_user.split('-');
  console.log(birthday);

  let current_year = new Date();

  let year = current_year.getFullYear();
  console.log(year);
  console.log(birthday[0]);

  let month = current_year.getMonth()+1;
  console.log(month);
  console.log(birthday[1]);

  let day = current_year.getDate();
  console.log(day);
  console.log(birthday[2]);
}




