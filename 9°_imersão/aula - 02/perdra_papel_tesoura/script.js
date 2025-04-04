function jogar() {// Solicita a idade do jogador
    let idade = Number(prompt("Quantos anos você tem?"));
    
    // Verifica se o jogador tem idade suficiente para jogar
    if (idade < 18) {
        alert('Você não pode jogar jokenpô'); // Bloqueia menores de idade
    } else {
        // Solicita a escolha do jogador (1 - Pedra, 2 - Papel, 3 - Tesoura)
        let escolhajogador = Number(prompt('1 - Pedra, 2 - Papel, 3 - Tesoura?'));
        
        // Gera uma escolha aleatória para o computador (de 1 a 3)
        let escolhacomputador = Math.floor(Math.random() * 3) + 1;
    
        // Exibe a escolha do computador
        alert('A escolha do computador foi: ' + escolhacomputador);
    
        // Caso em que o jogo termina empatado
        if (escolhajogador == escolhacomputador) {
            alert('Empate!!!');
        }
        // Verifica se o jogador venceu
        else if (escolhajogador == 1 && escolhacomputador == 3) {
            alert('Você venceu! Pedra quebra tesoura.');
        }
        else if (escolhajogador == 2 && escolhacomputador == 1) {
            alert('Você venceu! Papel embrulha pedra.');
        }
        else if (escolhajogador == 3 && escolhacomputador == 2) {
            alert('Você venceu! Tesoura corta papel.');
        }
        // Se não foi empate nem vitória do jogador, então o computador venceu
        else {
            alert('Computador venceu!');
        }
    }
    }