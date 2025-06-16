// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // === Mobile Menu ===
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
  });

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      body.style.overflow = 'auto';
    });
  });

  // === Smooth Scrolling ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === Typed Animation ===
  const typedText = document.getElementById('typed');
  if (typedText) {
    const words = ['Computer Science Engineer...', 'UI/UX Designer...', 'Web Developer...'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      const currentText = currentWord.substring(0, charIndex);
      typedText.textContent = currentText;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
      }
    }

    type(); // start typing
  }
});
  
// === VanillaTilt Effect ===
VanillaTilt.init(document.querySelectorAll(".icon-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.4
});

// === Modal Image Viewer ===
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  if (modal && modalImg) {
    modalImg.src = src;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}



