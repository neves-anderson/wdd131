document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MENU MOBILE TOGGLE (DOM & Eventos)
  // ==========================================
  const menuButton = document.getElementById('menu-button');
  const siteNav = document.querySelector('.site-nav');

  if (menuButton && siteNav) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open');
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // 2. RENDERIZAÇÃO DA PÁGINA INICIAL (INDEX)
  // ==========================================
  const filmesInicial = [
    {
      titulo: "Cidade dos Anjos",
      genero: "ROMANCE",
      ano: 1998,
      diretor: "Brad Silberling",
      sinopse: "Uma médica e um anjo se encontram em uma história delicada sobre escolha e humanidade.",
      poster: "imagens/cidade-dos-anjos.webp"
    },
    {
      titulo: "A Chegada",
      genero: "FICÇÃO CIENTÍFICA",
      ano: 2016,
      diretor: "Denis Villeneuve",
      sinopse: "Uma linguista tenta encontrar uma linguagem comum com visitantes de outro mundo.",
      poster: "imagens/a-chegada.webp"
    },
    {
      titulo: "Tudo em Todo Lugar ao Mesmo Tempo",
      genero: "AVENTURA",
      ano: 2022,
      diretor: "Daniel Kwan, Daniel Scheinert",
      sinopse: "Uma aventura multiversal sobre família, identidade e as infinitas possibilidades da vida.",
      poster: "imagens/tudo-em-todo-lugar-ao-mesmo-tempo.webp"
    },
    {
      titulo: "Central do Brasil",
      genero: "DRAMA",
      ano: 1998,
      diretor: "Walter Salles",
      sinopse: "Uma ex-professora e um menino cruzam o país em busca de respostas e de um novo começo.",
      poster: "imagens/central-do-brasil.webp"
    }
  ];

  // Ajustado para usar uma variável exclusiva para a página inicial[cite: 2, 4]
  const filmesInicialGrid = document.getElementById('filmesInicialGrid');

  if (filmesInicialGrid) {
    filmesInicialGrid.innerHTML = filmesInicial.map(filme => `
      <article class="film-card">
        <div class="film-poster">
          <img src="${filme.poster}" alt="Pôster do filme ${filme.titulo}" loading="lazy" width="300" height="450">
        </div>
        <div class="film-info">
          <div class="film-meta">
            <span>${filme.genero}</span>
            <span>${filme.ano}</span>
          </div>
          <h3>${filme.titulo}</h3>
          <p>${filme.sinopse}</p>
        </div>
      </article>
    `).join('');
  }

  // ==========================================
  // 3. RENDERIZAÇÃO DA PÁGINA LANÇAMENTOS
  // ==========================================
  const filmesLancamentos = [
    {
      titulo: "Duna: Parte Dois",
      genero: "FICÇÃO CIENTÍFICA",
      ano: 2024,
      diretor: "Denis Villeneuve",
      sinopse: "Paul Atreides se une aos Fremen em uma jornada épica pelo destino de Arrakis.",
      poster: "imagens/duna-parte-dois.webp"
    },
    {
      titulo: "Rivais",
      genero: "DRAMA",
      ano: 2024,
      diretor: "Luca Guadagnino",
      sinopse: "Uma ex-tenista transforma uma disputa esportiva em um duelo pessoal intenso.",
      poster: "imagens/rivais.webp"
    },
    {
      titulo: "Divertida Mente 2",
      genero: "ANIMAÇÃO",
      ano: 2024,
      diretor: "Kelsey Mann",
      sinopse: "Riley cresce — e novas emoções chegam para bagunçar, expandir e enriquecer a central de comando.",
      poster: "imagens/divertida-mente-2.webp"
    },
    {
      titulo: "Ainda Estou Aqui",
      genero: "DRAMA",
      ano: 2024,
      diretor: "Walter Salles",
      sinopse: "Em meio à ditadura, Eunice Paiva luta para manter a família unida e buscar respostas.",
      poster: "imagens/ainda-estou-aqui.webp"
    }
  ];

  // Ajustado para usar uma variável exclusiva para a página de lançamentos[cite: 3, 4]
  const filmesLancamentosGrid = document.getElementById('filmesLancamentosGrid');

  if (filmesLancamentosGrid) {
    filmesLancamentosGrid.innerHTML = filmesLancamentos.map(filme => `
      <article class="film-card">
        <div class="film-poster">
          <img src="${filme.poster}" alt="Pôster do filme ${filme.titulo}" loading="lazy" width="300" height="450">
        </div>
        <div class="film-info">
          <div class="film-meta">
            <span>${filme.genero}</span>
            <span>${filme.ano}</span>
          </div>
          <h3>${filme.titulo}</h3>
          <p>${filme.sinopse}</p>
        </div>
      </article>
    `).join('');
  }


  // ==========================================
  // 4. RENDERIZAÇÃO DA PÁGINA DE DESTAQUES
  // ==========================================
  const filmesDestaques = [
    {
      titulo: "O Poderoso Chefão",
      genero: "CRIME / DRAMA",
      ano: 1972,
      diretor: "Francis Ford Coppola",
      sinopse: "A saga da família Corleone e a transição de poder na máfia americana.",
      poster: "imagens/o-poderoso-chefao.webp"
    },
    {
      titulo: "Matrix",
      genero: "FICÇÃO CIENTÍFICA",
      ano: 1999,
      diretor: "Lana e Lilly Wachowski",
      sinopse: "Um hacker começa a questionar a realidade e descobre que o mundo esconde outra camada.",
      poster: "imagens/matrix.webp"
    },
    {
      titulo: "A Viagem de Chihiro",
      genero: "ANIMAÇÃO",
      ano: 2001,
      diretor: "Hayao Miyazaki",
      sinopse: "Uma jovem precisa encontrar coragem em um mundo mágico para salvar sua família.",
      poster: "imagens/a-viagem-de-chihiro.webp"
    },
    {
      titulo: "Cidade dos Anjos",
      genero: "ROMANCE",
      ano: 1998,
      diretor: "Brad Silberling",
      sinopse: "Uma médica e um anjo se encontram em uma história delicada sobre escolha e humanidade.",
      poster: "imagens/cidade-dos-anjos.webp"
    },
    {
      titulo: "Central do Brasil",
      genero: "DRAMA",
      ano: 1998,
      diretor: "Walter Salles",
      sinopse: "Uma ex-professora e um menino cruzam o país em busca de respostas e de um novo começo.",
      poster: "imagens/central-do-brasil.webp"
    },
    {
      titulo: "O Resgate do Soldado Ryan",
      genero: "DRAMA / GUERRA",
      ano: 1998,
      diretor: "Steven Spielberg",
      sinopse: "O filme retrata a Segunda Guerra Mundial e a invasão da Normandia, mostrando o heroísmo e os sacrifícios dos soldados que precisam procurar o soldado Ryan e garantir o seu retorno, com vida, para casa.",
      poster: "imagens/o-resgate-soldado-ryan.webp"
    },
    {
      titulo: "A Chegada",
      genero: "FICÇÃO CIENTÍFICA",
      ano: 2016,
      diretor: "Denis Villeneuve",
      sinopse: "Uma linguista tenta encontrar uma linguagem comum com visitantes de outro mundo.",
      poster: "imagens/a-chegada.webp"
    },
    {
      titulo: "Tudo em Todo Lugar ao Mesmo Tempo",
      genero: "DRAMA",
      ano: 1998,
      diretor: "Daniel Kwan, Daniel Scheinert",
      sinopse: "Uma viagem pelo país se transforma em uma relação inesperada de afeto e esperança.",
      poster: "imagens/tudo-em-todo-lugar-ao-mesmo-tempo.webp"
    }
  ];

  const moviesGrid = document.getElementById('moviesGrid');
  const destaquesCounter = document.getElementById('destaquesCounter');

  if (moviesGrid) {
    moviesGrid.innerHTML = filmesDestaques.map(filme => `
      <article class="movie-card">
        <div class="card-poster">
          <img src="${filme.poster}" alt="Pôster do filme ${filme.titulo}" loading="lazy" width="300" height="450">
        </div>
        <div class="card-body">
          <div class="card-meta-info">
            <span>${filme.genero}</span>
            <span>${filme.ano}</span>
          </div>
          <h3 class="movie-title">${filme.titulo}</h3>
          <p class="movie-synopsis">${filme.sinopse}</p>
          <p class="director">Direção: ${filme.diretor}</p>
        </div>
      </article>
    `).join('');

    if (destaquesCounter) {
      const total = filmesDestaques.length;
      destaquesCounter.textContent = `${total < 10 ? '0' + total : total} Histórias selecionadas`;
    }
  }

  // ==========================================
  // 5. NEWSLETTER, MODAL & LOCALSTORAGE
  // ==========================================
  const newsletterForm = document.querySelector('[data-newsletter-form]');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  const inscritoSalvo = localStorage.getItem('cineclube_inscrito');
  if (inscritoSalvo && newsletterForm) {
    const statusText = document.getElementById('newsletter-status');
    if (statusText) {
      statusText.textContent = `Você já assina nossas novidades com o e-mail: ${inscritoSalvo}`;
    }
  }

  if (newsletterForm && successModal) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        localStorage.setItem('cineclube_inscrito', emailInput.value);
      }

      successModal.classList.add('is-open');
      successModal.setAttribute('aria-hidden', 'false');
      newsletterForm.reset();
    });

    const closeModal = () => {
      successModal.classList.remove('is-open');
      successModal.setAttribute('aria-hidden', 'true');
    };

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successModal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // ==========================================
  // 6. CARROSSEL DA HERO (SE EXISTIR)
  // ==========================================
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = carousel.querySelectorAll('[data-slide]');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    let currentIndex = 0;

    const updateCarousel = (index) => {
      slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
      });

      dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', isActive);
      });

      currentIndex = index;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateCarousel(nextIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(prevIndex);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateCarousel(index);
      });
    });
  }

  // ==========================================
  // 7. ATUALIZAÇÃO DINÂMICA DO FOOTER
  // ==========================================
  const anoAtualSpan = document.getElementById('anoAtual');
  if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
  }

  const dataModificacaoTime = document.getElementById('dataModificacao');
  if (dataModificacaoTime) {
    const lastModifiedDate = new Date(document.lastModified);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    dataModificacaoTime.textContent = lastModifiedDate.toLocaleDateString('pt-BR', options);
    dataModificacaoTime.setAttribute('datetime', document.lastModified);
  }
});