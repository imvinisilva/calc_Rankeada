let nomeHeroi = "Valtin da foice"

console.log("Olá, " + nomeHeroi + "!! Vamos descobrir qual é o seu nivel no jogo?")

function calculadoraPartida(qtdVitorias, qtdDerrotas){
    return qtdVitorias - qtdDerrotas;
}

let saldoVitorias = calculadoraPartida(1564, 359);

if(saldoVitorias <= 10 ){
    nivel = "Ferro"
} else if(saldoVitorias <= 20){
    nivel = "Bronze"
} else if(saldoVitorias <= 50){
    nivel = "Prata"
} else if (saldoVitorias <= 80){
    nivel = "Ouro"
} else if(saldoVitorias <= 90){
    nivel = "Diamante"
}else if(saldoVitorias <= 100 ){
    nivel = "Lendário"
}else if(saldoVitorias >= 101 ){
    nivel = "Imortal"
}

console.log("O Heroi " + nomeHeroi + " Tem o saldo de " + saldoVitorias + " esta no nivel " + nivel);
