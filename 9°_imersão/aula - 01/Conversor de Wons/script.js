function conversor() {
    let valorwons = prompt("Digite um valor");  // Valor digitado pelo usuário
    let unwon = 0.0040;  // Taxa de conversão de Wons para Reais (exemplo)
    alert("R$ " + (parseFloat(valorwons) * unwon).toFixed(2));  // Converte para número e realiza a multiplicação
};