function conversor() {
    let valorRDR = prompt("Digite um valor em RDR$:");
    let taxaRDR = 35;  // 1 RDR$ ≈ 35 USD
    let resultado = valorRDR * taxaRDR;
    alert("Valor em USD: $" + resultado.toFixed(2));  // Exibe o valor convertido
  };