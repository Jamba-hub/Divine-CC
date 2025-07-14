document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    // Scroll to Top Button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open'); // For transforming the hamburger into a "close" icon
});
document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseenter", function () {
        this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
    });
});