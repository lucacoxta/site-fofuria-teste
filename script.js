// ===============================
// MENU MÓVEL
// ===============================
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuButton.classList.toggle('open'); // opcional para animar o ícone
});

// ===============================
// SCROLL HEADER
// ===============================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===============================
// FADE-IN AO SCROLL
// ===============================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===============================
// AUTOPLAY VÍDEO
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video-container video');

  if (video) {
    // Tenta reproduzir o vídeo automaticamente
    const playPromise = video.play();

    // Alguns navegadores retornam uma promessa que pode ser rejeitada
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Caso o autoplay seja bloqueado, apenas garante que esteja muted e tenta novamente
        video.muted = true;
        video.play().catch(err => console.log('Erro ao tentar autoplay:', err));
      });
    }
  }
});
