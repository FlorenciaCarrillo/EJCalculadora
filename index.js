let botonesNumero = document.getElementsByClassName("botonNumero");
let pantalla = document.getElementsByClassName("pantalla")[0];
let botonSuma = document.getElementById("botonSuma");
let operacion = 0;
let resultado = "";
let botonBorrar = document.getElementById("botonBorrar");
let botonFactorial = document.getElementById("botonFactorial");


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

botonFactorial.onclick = () => {
    let numero = parseInt(pantalla.textContent);
    if (numero === 0)
        pantalla.innerHTML = 1;
    else {
        let res = 1;
        for (let n = numero; n > 0; n--) {
            res = res * n;
        }
        pantalla.innerHTML = res;
    }
}

