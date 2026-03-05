const perguntas = [
  {
    frase: "O gato bebe _____.",
    opcoes: ["leite", "pedra", "areia", "papel"],
    resposta: "leite",
  },
  {
    frase: "Qual palavra é um animal?",
    opcoes: ["mesa", "cachorro", "lápis", "cadeira"],
    resposta: "cachorro",
  },
  {
    frase: "Qual palavra está escrita corretamente?",
    opcoes: ["cazamento", "kazamento", "casamento", "casamemto"],
    resposta: "casamento",
  },
  {
    frase: "O sol nasce de _____.",
    opcoes: ["dia", "noite", "manhã", "tarde"],
    resposta: "manhã",
  },
  {
    frase: "Qual palavra rima com 'pato'?",
    opcoes: ["gato", "casa", "mesa", "bola"],
    resposta: "gato",
  },
  {
    frase: "Qual dessas palavras é uma fruta?",
    opcoes: ["banana", "cadeira", "livro", "sapato"],
    resposta: "banana",
  },
  {
    frase: "Eu uso _____ para escrever.",
    opcoes: ["garfo", "lápis", "prato", "copo"],
    resposta: "lápis",
  },
  {
    frase: "Qual palavra começa com a letra B?",
    opcoes: ["gato", "bola", "mesa", "sapato"],
    resposta: "bola",
  },
  {
    frase: "Qual dessas palavras é um objeto da escola?",
    opcoes: ["caderno", "cachorro", "banana", "peixe"],
    resposta: "caderno",
  },
  {
    frase: "O peixe vive na _____.",
    opcoes: ["árvore", "água", "casa", "rua"],
    resposta: "água",
  },
  {
    frase: "Qual palavra é uma cor?",
    opcoes: ["azul", "sapato", "livro", "bola"],
    resposta: "azul",
  },
  {
    frase: "Qual dessas palavras é um alimento?",
    opcoes: ["arroz", "cadeira", "janela", "carro"],
    resposta: "arroz",
  },
  {
    frase: "A galinha põe _____.",
    opcoes: ["pedra", "ovos", "folhas", "areia"],
    resposta: "ovos",
  },
  {
    frase: "Qual palavra está escrita corretamente?",
    opcoes: ["escóla", "escola", "iscola", "esqola"],
    resposta: "escola",
  },
  {
    frase: "Qual palavra representa um lugar?",
    opcoes: ["parque", "lápis", "bola", "banana"],
    resposta: "parque",
  },
];

let indice = 0;

function mostrarPergunta() {
  const pergunta = perguntas[indice];

  document.getElementById("frase").innerText = pergunta.frase;

  const opcoes = document.getElementById("opcao");
  opcoes.innerHTML = "";

  pergunta.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.innerText = opcao;

    botao.onclick = () => verificarResposta(opcao);
    resultado.innerText = "";
    opcoes.appendChild(botao);
  });
}

function verificarResposta(opcao) {
  const pergunta = perguntas[indice];

  const resultado = document.getElementById("resultado");

  if (opcao === pergunta.resposta) {
    resultado.innerText = "CORRETO✅";
    resultado.className = "correto";
  } else {
    resultado.innerText = "INCORRETO❌";
    resultado.className = "incorreto";
  }
  indice++;

  if (indice < perguntas.length) {
    setTimeout(mostrarPergunta, 1000);
  } else {
    setTimeout(() => {
      document.body.innerHTML = "<h2>Fim de Jogo 🎉</h2>";
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", mostrarPergunta());
