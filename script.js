// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form validation and success message
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic validation (already required in HTML, but extra flair)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        formMessage.textContent = `Arigato, ${name}! Your summoning scroll has been sent. Dattebayo!`;
        contactForm.reset();
    } else {
        formMessage.textContent = "Please fill out all fields, young shinobi!";
        formMessage.style.color = "#d32f2f";
    }
});
