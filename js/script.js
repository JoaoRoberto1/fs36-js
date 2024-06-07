// console.log('Script via body', document.getElementById('n1'))

const numero1 = (document.getElementById('n1'));
const numero2 = (document.getElementById('n2'));
const conteudoDiv = document.querySelector('.resultado')

function soma() {
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value)
    exibirResultado(resultado)
}

function subtrair() {
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value)
    exibirResultado(resultado)
}

function multiplicar() {
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value)
    exibirResultado(resultado)
}

function dividir() {
    let resultado = parseFloat(numero1.value) / parseFloat(numero2.value)
    exibirResultado(resultado)
}

function exibirResultado(resultado) {
    conteudoDiv.innerHTML = resultado
}

function limparresultado() {
    conteudoDiv.computedStyleMap.display = 'flex';
    conteudoDiv.innerHTML = 'Resultado: ' + result
}