let idade = 35;

/* 
se a idade for = 18 é de maior
se a idade for menor que 18 é de menor
*/

/* "===" -> estritamente igual, verifica o tipo e o valor */

if (idade >= 18) {
    console.log("Você é de maior!");    
} 
else if (idade >= 13 && idade < 18) {
    console.log("Você é adolescente!"); 
}
else if (idade <= 12 && idade > 3) {
    console.log("Você é uma criança!");
}
else if (idade <= 3) {
    console.log("Você é um bebê!");
}
else {
    console.log("Você é de menor!");
}