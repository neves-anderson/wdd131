// Lista de Produtos
const products = [
    { id: "fc-1888", name: "Smartphone Premium" },
    { id: "fc-2050", name: "Notebook Ultrafino" },
    { id: "fs-1987", name: "Fone Bluetooth Noise Cancelling" },
    { id: "ac-2000", name: "Smartwatch Fitness Pro" },
    { id: "jj-1969", name: "Monitor Gaming 4K" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Atualiza Ano Atual no Rodapé
    const anoElemento = document.getElementById('anoAtual');
    if (anoElemento) {
        anoElemento.textContent = new Date().getFullYear();
    }

    // Atualiza Última Modificação
    const modificacaoElemento = document.getElementById("dataModificacao");
    if (modificacaoElemento) {
        const data = new Date(document.lastModified); 
        modificacaoElemento.textContent = data.toLocaleString("pt-BR");
    }

    // Elementos do formulário e erros
    const productSelect = document.getElementById('productSelect');
    const productError = document.getElementById('productError');
    const ratingError = document.getElementById('ratingError');
    const dateError = document.getElementById('dateError');

    // Povoar dinamicamente o Select de Produtos
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });

        // Mantém o contraste de texto adequado desde o carregamento
        productSelect.style.color = '#222222';
        productSelect.addEventListener('change', function() {
            if (this.value) {
                this.style.color = '#222222';
                if (productError) productError.style.display = 'none';
            }
        });
    }

    const form = document.getElementById('evaluationForm');
    const installDate = document.getElementById('installDate');
    const modal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalContent = document.getElementById('modalContent');

    if (installDate) {
        installDate.addEventListener('input', function() {
            if (this.value && dateError) {
                dateError.style.display = 'none';
            }
        });
    }

    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (ratingError) ratingError.style.display = 'none';
        });
    });

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;

            // Validação do Produto
            if (!productSelect || !productSelect.value) {
                if (productError) productError.style.display = 'block';
                isValid = false;
            } else if (productError) {
                productError.style.display = 'none';
            }

            // Validação da Classificação
            const selectedRating = document.querySelector('input[name="rating"]:checked');
            if (!selectedRating) {
                if (ratingError) ratingError.style.display = 'block';
                isValid = false;
            } else if (ratingError) {
                ratingError.style.display = 'none';
            }

            // Validação da Data
            if (!installDate || !installDate.value) {
                if (dateError) dateError.style.display = 'block';
                isValid = false;
            } else if (dateError) {
                dateError.style.display = 'none';
            }

            if (isValid) {
                // Incremento e Registo no LocalStorage
                let totalReviews = Number(localStorage.getItem('numReviews-ls')) || 0;
                totalReviews++;
                localStorage.setItem('numReviews-ls', totalReviews);

                // Dados preenchidos
                const productName = productSelect.value;
                const ratingValue = selectedRating.value;
                const nameInput = document.getElementById('userName');
                const name = nameInput ? nameInput.value.trim() : '';
                const reviewerName = name ? name : 'Anônimo';

                const checkedResources = Array.from(document.querySelectorAll('input[name="resources"]:checked'))
                    .map(cb => cb.value);

                let resourcesText = checkedResources.length > 0 
                    ? checkedResources.join(', ') 
                    : 'Nenhum recurso específico marcado';

                // Conteúdo exibido no Modal
                if (modalContent) {
                    modalContent.innerHTML = `
                        <strong>Obrigado, ${reviewerName}!</strong><br><br>
                        Sua avaliação para <strong>${productName}</strong> com nota <strong>${ratingValue}/5 ⭐</strong> foi registrada com sucesso.<br><br>
                        <em>Recursos destacados:</em> ${resourcesText}.<br><br>
                        <small>Total de avaliações enviadas por você: <strong>${totalReviews}</strong></small>
                    `;
                }

                if (modal) modal.classList.add('active');
                form.reset();
                if (productSelect) productSelect.style.color = '#222222';
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});