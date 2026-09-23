// 1. Variáveis estáticas de temperatura (°C) e velocidade do vento (km/h)
const temp = 8; // Valor <= 10 °C
const windSpeed = 10; // Valor > 4.8 km/h

// 2. Critério 7: Função de linha única para cálculo da sensação térmica
const calcularSensacaoTermica = (t, v) => 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

// 3. Execução ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const sensacaoSpan = document.getElementById("sensacaoTermica");

    // Critério 7: A função só é chamada se as condições forem atendidas
    if (temp <= 10 && windSpeed > 4.8) {
        const sensacao = calcularSensacaoTermica(temp, windSpeed);
        if (sensacaoSpan) sensacaoSpan.textContent = sensacao.toFixed(1);
    } else {
        if (sensacaoSpan) sensacaoSpan.textContent = "N/A";
    }

    // Atualização dinâmica dos dados do rodapé
    const anoAtual = document.getElementById("anoAtual");
    const dataModificacao = document.getElementById("dataModificacao");

    if (anoAtual) anoAtual.textContent = new Date().getFullYear();
    if (dataModificacao) {
        const data = new Date(document.lastModified);
        dataModificacao.textContent = data.toLocaleString("pt-BR");
    }
});