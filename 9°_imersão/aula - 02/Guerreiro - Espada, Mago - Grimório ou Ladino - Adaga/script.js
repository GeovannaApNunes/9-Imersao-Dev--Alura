function jogar() {
    // Solicita a idade do jogador
    let idade = Number(prompt("Quantos anos você tem?"));
    
    // Verifica se o jogador tem idade suficiente para jogar
    if (idade < 18) {
        alert('Você não pode participar deste duelo!'); // Bloqueia menores de idade
    } else {
        // Solicita a escolha do jogador (1 - Guerreiro, 2 - Mago, 3 - Ladino)
        let escolhajogador = Number(prompt('Escolha seu combatente:\n1 - Guerreiro (Espada)\n2 - Mago (Grimório)\n3 - Ladino (Adaga)'));

        // Gera uma escolha aleatória para o computador (de 1 a 3)
        let escolhacomputador = Math.floor(Math.random() * 3) + 1;

        // Opções em texto
        let classes = ["Guerreiro (Espada)", "Mago (Grimório)", "Ladino (Adaga)"];

        // Exibe a escolha do computador
        alert('Seu adversário escolheu: ' + classes[escolhacomputador - 1]);

        // Caso de empate
        if (escolhajogador == escolhacomputador) {
            alert('Empate! Os combatentes se enfrentam, mas nenhum prevalece.');
        }
        // Verifica se o jogador venceu
        else if (escolhajogador == 1 && escolhacomputador == 3) {
            alert('Você venceu! O Guerreiro usou sua Espada para derrotar o Ladino.');
        }
        else if (escolhajogador == 2 && escolhacomputador == 1) {
            alert('Você venceu! O Mago lançou um feitiço poderoso contra o Guerreiro.');
        }
        else if (escolhajogador == 3 && escolhacomputador == 2) {
            alert('Você venceu! O Ladino foi rápido e atacou o Mago antes de ele conjurar sua magia.');
        }
        // Se não foi empate nem vitória do jogador, então o computador venceu
        else {
            alert('Computador venceu! Seu adversário foi mais astuto.');
        }
    }
}
