AOS.init();

// Mobile Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

  // Typed Animation
 const typedText = document.getElementById('typed');
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

        document.addEventListener('DOMContentLoaded', () => {
            type();
        });       

VanillaTilt.init(document.querySelectorAll(".icon-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.4
});



// modal functionality
function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

//for gallery images
  AOS.init({
    duration: 800,
    once: true
  });