// console.log('Script via body', document.getElementById('n1'))

function soma() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);


    let resultado = numero1 + numero2


    console.log(resultado);

    // exibindo o resultado da div rasultado atráves da prop innerHTMl
    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado 
}

function subtrair() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);


    let resultado = numero1 - numero2


    console.log(resultado);

    // exibindo o resultado da div rasultado atráves da prop innerHTMl
    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado 
}

function multiplicar() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);


    let resultado = numero1 * numero2


    console.log(resultado);

    // exibindo o resultado da div rasultado atráves da prop innerHTMl
    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado 
}

function dividir() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);


    let resultado = numero1 / numero2


    console.log(resultado);

    // exibindo o resultado da div rasultado atráves da prop innerHTMl
    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado 
}