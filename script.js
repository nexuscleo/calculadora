const display = document.getElementById('display');

function adicionarCaracter(caracter) {
    display.value += caracter;
}

function limparDisplay() {
    display.value = '';
}

function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        // A função eval calcula a expressão matemática escrita no display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
