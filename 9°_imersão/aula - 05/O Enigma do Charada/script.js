// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "O que é que quanto mais se tira, maior fica?",
      respostas: [
        { opcao: "Buraco", correto: true },
        { opcao: "Tempo", correto: false },
        { opcao: "Mistério", correto: false }
      ]
    },
    {
      pergunta: "Eu começo a noite e termino de manhã. O que sou?",
      respostas: [
        { opcao: "Letra N", correto: true },
        { opcao: "Sombra", correto: false },
        { opcao: "Sonho", correto: false }
      ]
    },
    {
      pergunta: "Se você me tem, quer me compartilhar. Se me compartilha, já não me tem. O que sou?",
      respostas: [
        { opcao: "Segredo", correto: true },
        { opcao: "Sorriso", correto: false },
        { opcao: "Eco", correto: false }
      ]
    },
    {
      pergunta: "O que é maior que Deus, mais maligno que o diabo, os pobres têm e os ricos precisam?",
      respostas: [
        { opcao: "Nada", correto: true },
        { opcao: "Poder", correto: false },
        { opcao: "Dinheiro", correto: false }
      ]
    },
    {
      pergunta: "Quanto mais você tira, mais ele cresce. O que é?",
      respostas: [
        { opcao: "Buraco", correto: true },
        { opcao: "Sombra", correto: false },
        { opcao: "Nuvem", correto: false }
      ]
    },
    {
      pergunta: "O que pode correr, mas nunca anda, tem uma cama, mas nunca dorme?",
      respostas: [
        { opcao: "Rio", correto: true },
        { opcao: "Relógio", correto: false },
        { opcao: "Vento", correto: false }
      ]
    }
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++;
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}! Será que Batman descobriria todas?`;
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
