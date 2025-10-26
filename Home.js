const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});



// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init({ publicKey: "_KmXJJcQiQfrra2VR" });

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_3njeset", "template_uxg1bvy", this)
        .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
        })
        .catch((error) => {
        alert("❌ Failed to send message. " + JSON.stringify(error));
        form.reset();
        });
    });
});


window.addEventListener("load", function() {
    const form = document.getElementById("contact-form");
    if (form) {
        form.reset();
    }
});



const goTop = document.getElementById('goTop');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    goTop.style.display = 'block';
    } else {
    goTop.style.display = 'none';
    }
});


goTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.about, .vm, #vision, #mission, #contact__us, #contact-form, .partners, #partners, .vimi, .exp, .who');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.who');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
