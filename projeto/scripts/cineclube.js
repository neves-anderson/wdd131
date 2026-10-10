/**
 * CINECLUBE - SCRIPT PRINCIPAL (CINECLUBE.JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. MENU MOBILE TOGGLE
  const menuButton = document.getElementById('menu-button');
  const siteNav = document.querySelector('.site-nav');

  if (menuButton && siteNav) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open');
    });

    // Fechar menu ao clicar em links no mobile
    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. CARROSSEL HERO
  const slides = document.querySelectorAll('[data-slide]');
  const dots = document.querySelectorAll('[data-slide-to]');
  const prevButton = document.querySelector('[data-carousel-prev]');
  const nextButton = document.querySelector('[data-carousel-next]');
  const statusAnnouncer = document.querySelector('[data-carousel-status]');

  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function updateCarousel(newIndex) {
    slides.forEach((slide, idx) => {
      if (idx === newIndex) {
        slide.classList.add('is-active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('is-active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === newIndex) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-pressed', 'true');
      } else {
        dot.classList.remove('is-active');
        dot.setAttribute('aria-pressed', 'false');
      }
    });

    if (statusAnnouncer) {
      statusAnnouncer.textContent = `Slide ${newIndex + 1} de ${totalSlides}`;
    }

    currentIndex = newIndex;
  }

  function nextSlide() {
    let nextIdx = (currentIndex + 1) % totalSlides;
    updateCarousel(nextIdx);
  }

  function prevSlide() {
    let prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(prevIdx);
  }

  // Event listeners para setas e dots
  if (nextButton) nextButton.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  if (prevButton) prevButton.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.currentTarget.getAttribute('data-slide-to'), 10);
      updateCarousel(targetIndex);
      resetTimer();
    });
  });

  // Auto-play do carrossel
  function startTimer() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  if (totalSlides > 0) {
    startTimer();
  }

  // 3. NEWSLETTER & MODAL DE SUCESSO
  const newsletterForm = document.querySelector('[data-newsletter-form]');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (newsletterForm && successModal) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validação simples e abertura do modal
      successModal.classList.add('is-open');
      newsletterForm.reset();
    });

    const closeModal = () => {
      successModal.classList.remove('is-open');
    };

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    // Fechar ao clicar fora do card do modal
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successModal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // 4. ATUALIZAÇÃO DINÂMICA DO FOOTER (Ano e Modificação)
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