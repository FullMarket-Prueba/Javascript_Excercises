let inicialCliente = document.getElementById('inicialCliente'),
    nombreUsuario = document.getElementById('nombreUsuario'),
    mensajeEntrada = document.getElementById('mensaje'),
    caracteres = document.getElementById('caracteres'),
    mensajeSalida = document.getElementById('mensajeSalida'),
    btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click',tweet);
nombreUsuario.addEventListener('keypress',validacionEnter);
mensajeEntrada.addEventListener('keydown',tweet);
btnEnviar.addEventListener('click',imprimirMensaje);

function validacionEnter(event) { //funcion para que cuando la persona de enter llama a la funcion calcular
    let keyCode = event.keyCode;
    if (keyCode === 13) {
        tweet();
    }
}

function tweet(){
    //Inicial de un usuario por medio de un input
    let nombre = nombreUsuario.value;
    let inicial = nombre.toUpperCase().charAt(0);
    inicialCliente.textContent=inicial
    //sacar los caracteres por medio de una resta para que se tenga los caracteres que se llevan
    let mensaje = mensajeEntrada.value
    let tamañoCaracteres = mensaje.length 
    let totalCaracteres = 200 - tamañoCaracteres;
    caracteres.textContent = totalCaracteres
    if(totalCaracteres <= 50){
        caracteres.style.color= '#6b0704'
    }else{
        caracteres.style.color= 'black'
    }
    
}
function imprimirMensaje(){
    mensajeSalida.textContent = mensajeEntrada.value
}
