let botonesNumero = document.getElementsByClassName("botonNumero");
let pantalla = document.getElementsByClassName("pantalla")[0];
let botonSuma = document.getElementById("botonSuma");
let botonesOperando = document.getElementsByClassName("botonOperando")
let operando = "";
let primerFactor = 0;
let segundoFactor = 0;
let resultado = "";
let botonBorrar = document.getElementById("botonBorrar");


for (i = 0; i < botonesNumero.length; i++) {
    const boton = botonesNumero[i];
    boton.onclick = () => {
        pantalla.innerHTML += boton.textContent;
    }
}

for (let i = 0; i < botonesOperando.length; i++) {
    const boton = botonesOperando[i];
    boton.onclick = () => {
        primerFactor = parseFloat(pantalla.textContent);
        pantalla.innerHTML = "";
        operando = boton.textContent;
    }

}

botonBorrar.onclick = () => {
    pantalla.innerHTML = "";
    primerFactor = 0;
    segundoFactor = 0;
    operando = "";
}

botonIgual.onclick = () => {
    segundoFactor = parseInt(pantalla.textContent);
    switch (operando) {
        case "+":
            resultado = primerFactor + segundoFactor;
            pantalla.innerHTML = resultado;
            break;
        case "-":
            resultado = primerFactor - segundoFactor;
            pantalla.innerHTML = resultado;
            break;
        case "*":
            resultado = primerFactor * segundoFactor;
            pantalla.innerHTML = resultado;
            break;
        case "/":
            resultado = primerFactor / segundoFactor;
            pantalla.innerHTML = resultado;
            break;

        default:
            break;
    }
}

let numeroPantalla = "";

