let botonesNumero = document.getElementsByClassName("botonNumero");
let pantalla = document.getElementsByClassName("pantalla")[0];
let botonSuma = document.getElementById("botonSuma");
let operacion = 0;
let resultado = "";
let botonBorrar = document.getElementById("botonBorrar");


for (i = 0; i < botonesNumero.length; i++) {
    const boton = botonesNumero[i];
    boton.onclick = () => {
        pantalla.innerHTML += boton.textContent;
    }
}


botonBorrar.onclick = () => {
    pantalla.innerHTML = "";
    operacion = 0;
}

botonIgual.onclick = () => {
    operacion = pantalla.textContent;
    resultado = eval(operacion); //eval recibe strings
    pantalla.innerHTML = resultado;
}

let numeroPantalla = "";

