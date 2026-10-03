document.addEventListener('DOMContentLoaded', () => {
const anoElemento = document.getElementById('anoAtual');
  if (anoElemento) {
        anoElemento.textContent = new Date().getFullYear();
    }
  // Data de modificação
    const modificacaoElemento = document.getElementById("ultimaModificacao");
    if (modificacaoElemento) {
    const data = new Date(document.lastModified); 

     // Exibe data e hora: DD/MM/AAAA HH:mm:ss
    const dataFormatada = data.toLocaleString("pt-BR");
    modificacaoElemento.textContent = `Última Modificação: ${dataFormatada}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('evaluationForm');
    const productSelect = document.getElementById('productSelect');
    const installDate = document.getElementById('installDate');
    const modal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalContent = document.getElementById('modalContent');

    // Error Message elements
    const productError = document.getElementById('productError');
    const ratingError = document.getElementById('ratingError');
    const dateError = document.getElementById('dateError');

    // Set placeholder-like style for select element until selected
    productSelect.style.color = '#757575';
    productSelect.addEventListener('change', function() {
        if (this.value) {
            this.style.color = '#222222';
            productError.style.display = 'none';
        }
    });

    installDate.addEventListener('input', function() {
        if (this.value) {
            dateError.style.display = 'none';
        }
    });

    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            ratingError.style.display = 'none';
        });
    });

    // Form Submit Event Handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        // Validate Product Selection
        if (!productSelect.value) {
            productError.style.display = 'block';
            isValid = false;
        } else {
            productError.style.display = 'none';
        }

        // Validate Rating selection
        const selectedRating = document.querySelector('input[name="rating"]:checked');
        if (!selectedRating) {
            ratingError.style.display = 'block';
            isValid = false;
        } else {
            ratingError.style.display = 'none';
        }

        // Validate Installation Date
        if (!installDate.value) {
            dateError.style.display = 'block';
            isValid = false;
        } else {
            dateError.style.display = 'none';
        }

        if (isValid) {
            // Gather form summary
            const productName = productSelect.value;
            const ratingValue = selectedRating.value;
            const name = document.getElementById('userName').value.trim();
            const reviewerName = name ? name : 'Anônimo';

            // Selected resources
            const checkedResources = Array.from(document.querySelectorAll('input[name="resources"]:checked'))
                .map(cb => cb.value);

            let resourcesText = checkedResources.length > 0 
                ? checkedResources.join(', ') 
                : 'Nenhum recurso específico marcado';

            // Format message
            modalContent.innerHTML = `
                <strong>Obrigado, ${reviewerName}!</strong><br><br>
                Sua avaliação para <strong>${productName}</strong> com nota <strong>${ratingValue}/5 ⭐</strong> foi recebida com sucesso.<br><br>
                <em>Recursos destacados:</em> ${resourcesText}.
            `;

            // Show success modal
            modal.classList.add('active');

            // Reset Form
            form.reset();
            productSelect.style.color = '#757575';
        }
    });

    // Close Modal Event
    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
