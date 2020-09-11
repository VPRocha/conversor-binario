var button = document.querySelector("button");
var resultElement = document.querySelector(".result");
var inputBinary = document.querySelector("input");

function checkNumeros(numers) {
    for (let i = 0; i < numers.length; i++) {
        if (numers[i] != 1 && numers[i] != 0) {
            return false
        }

    }

    return true;
}

button.onclick = function valida() {
    if (inputBinary.value === '') {
        alert("Por favor, digite um número binário!")
    } else {
        let valide = checkNumeros(inputBinary.value.toString())
        if (valide === true) {
            resultElement.innerHTML = converterBinario()
        } else {
            alert("Por favor, digite um número binário!")
        }
    }
}

function converterBinario() {
    let numero = parseInt(inputBinary.value, 2)
    return numero;
}