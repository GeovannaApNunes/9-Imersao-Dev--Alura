// Lista de jogadores
function jogar() {
    let personagens = ['', '', ''];
    let viloes = ['', '', ''];

    let forcapersonagem = 0;
    let forcaviloes = 0;

    alert('O array personagens contém: ' + personagens);

    for (let i = 0; i < 3; i++) {
        let personagem = prompt('Digite o nome do seu personagem: ' + (i + 1));
        personagens[i] = personagem;

        // Calcular a força do time
        forcapersonagem += Math.floor(Math.random() * 10) + 1;
    }

    console.log('Agora, o array personagens contém: ' + personagens);

    for (let i = 0; i < 3; i++) {
        let indicealeatorio = Math.floor(Math.random() * 5);
        let viloespossiveis = ['Omni-Man', 'Battle Beast', 'Conquest', 'Thragg', 'The Mauler Twins'];
        viloes[i] = viloespossiveis[indicealeatorio];

        // Calcular a força do time
        forcaviloes += Math.floor(Math.random() * 10) + 1;
    }

    console.log('Vilões: ' + viloes);

    if (forcapersonagem > forcaviloes) {
        alert('Seu time é o mais forte! Parabéns!!! Você ganhou! Sua força foi: ' + forcapersonagem);
    } else if (forcaviloes > forcapersonagem) {
        alert('Os vilões venceram! Sua força foi inferior.');
    } else {
        alert('Empate! Que batalha épica!');
    }
}
