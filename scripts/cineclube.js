document.addEventListener("DOMContentLoaded", () => {
    // Atualização dinâmica dos dados do rodapé
    const anoAtual = document.getElementById("anoAtual");
    const dataModificacao = document.getElementById("dataModificacao");
    const data = new Date(document.lastModified);
    const dataFormatada = data.toLocaleString("pt-BR")
    

    if (anoAtual) anoAtual.textContent = new Date().getFullYear();
    if (dataModificacao) dataModificacao.textContent = document.lastModified;
    dataModificacao.textContent = `${dataFormatada}`;

}); 