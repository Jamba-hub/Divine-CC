document.addEventListener('DOMContentLoaded', function () {
    // Toggle Service Details
    const serviceElements = document.querySelectorAll('.service');

    serviceElements.forEach(service => {
        service.addEventListener('click', () => {
            service.classList.toggle('expanded');
            const isExpanded = service.classList.contains('expanded');
            service.setAttribute('aria-expanded', isExpanded);
        });

        service.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                service.classList.toggle('expanded');
                const isExpanded = service.classList.contains('expanded');
                service.setAttribute('aria-expanded', isExpanded);
            }
        });
    });
    // Toggle Navigation Links (Hamburger Menu)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Click outside to close navigation
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
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
