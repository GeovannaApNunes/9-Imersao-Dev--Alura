function jogar() {
    let rodada = 1;
let venceu = false; // Variável booleana para indicar vitória

while (rodada <= 3) {
    let escolhaJogador = parseInt(prompt(`Rodada ${rodada}, escolha um vidro: 1, 2 ou 3`));

    // Bloquear entrada inválida
    if (escolhaJogador < 1 || escolhaJogador > 3 || isNaN(escolhaJogador)) {
        alert("Escolha inválida! Digite um número entre 1 e 3.");
        continue; // Recomeça a iteração sem contar como uma rodada válida
    }

    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador === pisoQuebrado) {
        alert("O vidro quebrou! Você perdeu.");
        break; // Sai do loop
    } else {
        alert(`Você passou para o próximo nível! O piso quebrado estava no ${pisoQuebrado}.`);
        rodada++;
    }
}

// Se passou das 3 rodadas, venceu
if (rodada > 3) {
    venceu = true;
    alert("Você venceu! Parabéns!");
}

console.log("Venceu:", venceu); // Exibe no console o resultado
}