// console.log('Script via body', document.getElementById('n1'))

const numero1 = (document.getElementById('n1'));
const numero2 = (document.getElementById('n2'));
const conteudoDiv = document.querySelector('.resultado')

function soma() {
    if (numero1.value !== '' && numero2.value !== '') {
        console.log('somar!')

    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value)
    exibirResultado(resultado)
    } else {
        console.log ('alerta preencher campos')
        alert ('Preencha os campos para realizar a soma!')
    }

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

function exibirResultado(result) {
    conteudoDiv.style.display = 'flex'
    conteudoDiv.innerHTML = 'Resultado: ' + result;
}

const limpar = () => {
    conteudoDiv.style.display = 'none'
    conteudoDiv.innerHTML = 'Resultado: '; 
}