function jogar() {
    let rodada = 1;
    let venceu = false; // Variável booleana para indicar vitória

    while (rodada <= 3) {
        let escolhaJogador = parseInt(prompt(`Rodada ${rodada}, escolha um caminho: 1, 2 ou 3`));

        // Bloquear entrada inválida
        if (escolhaJogador < 1 || escolhaJogador > 3 || isNaN(escolhaJogador)) {
            alert("Escolha inválida! Digite um número entre 1 e 3.");
            continue; // Recomeça a iteração sem contar como uma rodada válida
        }

        let armadilha = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador === armadilha) {
            alert("A criatura das trevas te encontrou! Você sucumbiu ao pesadelo.");
            break; // Sai do loop
        } else {
            alert(`Você avançou para a próxima área! O perigo estava no caminho ${armadilha}.`);
            rodada++;
        }
    }

    // Se passou das 3 rodadas, venceu
    if (rodada > 3) {
        venceu = true;
        alert("Você sobreviveu à caçada! Parabéns, caçador!");
    }

    console.log("Venceu:", venceu); // Exibe no console o resultado
}