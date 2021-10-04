const nota1 = document.querySelector('#n1');
const nota2 = document.querySelector('#n2');
const nota3 = document.querySelector('#n3');
const btn_calcular = document.querySelector('#btn-calcular');

btn_calcular.addEventListener('click', mostrarNota_Msj);

function calcularPendiente() {
  let n1 = Number(nota1.value);
  let n2 = Number(nota2.value);
  let acum = (n1*0.25)+(n2*0.35);
  let n3 = ((3.5-acum)/0.40).toFixed(2);  
  
  if (n1 < 1 || n2 < 1) {
    alert('Ingresa solo valores mayores o iguales a 1');
    nota1.value = 0;
    nota2.value = 0;
  } else {    
    return n3;    
  }

}

function mostrarNota_Msj() {
  const notaPendiente = calcularPendiente();
  if (notaPendiente > 5 ) {
    alert('Lo siento, ya no es posible pasar la materia, Tu nota pendiente es de: '+Math.ceil(notaPendiente));
  } else {
    nota3.textContent = notaPendiente;    
    nota3.style.textAlign = 'center';
    nota3.style.textAlign = 'center';
    nota3.style.fontSize = '2rem';
    console.log(notaPendiente);
  }
}


