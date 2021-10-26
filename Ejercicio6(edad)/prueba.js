const nameUser = document.getElementById('txt-name');
const date_birthday = document.getElementById('input-age');
const btn_calculate = document.getElementById('btn-calculate');
const resolve = document.getElementById('p-resolve');

btn_calculate.addEventListener('click',calculate_age);

function calculate_age() {

  // Capturando el value del input date
  let birthday_user = date_birthday.value;
    
  // Separando por '-', tener en cuenta que este método retorna un arreglo de 3 posiciones
  let birthday = birthday_user.split('-');
  
  // Obtener fecha Actual
  let current_year = new Date();

  // Obtener año actual
  let year = current_year.getFullYear();
  
  // Obtener mes actual,¡Pilas! - Revisar el que mes si cumpla con el esperado
  let month = current_year.getMonth();
  
  // Obtener d+ia actual
  let day = current_year.getDate();
  
}




