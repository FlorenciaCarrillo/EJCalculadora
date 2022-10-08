let botonesNumero = document.getElementsByClassName("botonNumero");
let pantalla = document.getElementsByClassName("pantalla")[0];
let botonSuma = document.getElementById("botonSuma");
let operacion = 0;
let resultado = "";
let botonBorrar = document.getElementById("botonBorrar");
let botonFactorial = document.getElementById("botonFactorial");
let botonPotencia2 = document.getElementById("botonPotencia2");
let botonPotencia3 = document.getElementById("botonPotencia3");
let botonPotenciaN = document.getElementById("botonPotenciaN");


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
    operacion = pantalla.textContent.replace("^", "**");
    resultado = eval(operacion); //eval recibe strings
    pantalla.innerHTML = resultado;
}

botonFactorial.onclick = () => {
    let numero = parseFloat(pantalla.textContent);
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

botonPotencia2.onclick = () => {
    let numero = parseFloat(pantalla.textContent);
    resultado = Math.pow(numero, 2);
    pantalla.innerHTML = resultado;
}

botonPotencia3.onclick = () => {
    let numero = parseFloat(pantalla.textContent);
    resultado = Math.pow(numero, 3);
    pantalla.innerHTML = resultado;
}

botonPotenciaN.onclick = () => {
    pantalla.innerHTML += "^";
}