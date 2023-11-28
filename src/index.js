//DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI

let nome = "monica"
let nivel = "8000"

if (nivel < 1000){
    console.log("Ferro")
} else if (nivel >= 1001 && nivel <= 2000){
    console.log("Bronze")
}else if (nivel >= 2001 && nivel <= 5000){
    console.log("Prata")
}else if (nivel >= 6001 && nivel <= 7000){
    console.log("Ouro")
}else if (nivel >= 7001 && nivel <= 8000){
    console.log("Platina")
}else if (nivel >= 8001 && nivel <= 9000){
    console.log("Ascendente")
}else if (nivel >= 9001 && nivel <= 10000){
    console.log("Imortal")
}else{
    console.log("Radiante")
}

console.log("O Herói de nome " + nome + " está no nível " + nivel + ".")