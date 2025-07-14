document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.nav-links .on').classList.toggle('active');
});


function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Get the alert message div
    const alertMessage = document.getElementById('alertMessage');

    // Basic form validation
    if (!name || !email || !message) {
        alertMessage.textContent = 'Please fill out all fields.';
        alertMessage.className = 'alert error';
        alertMessage.style.display = 'block';
        return;
    }

    // Optionally, you can process the form data or send it to a server here
    console.log('Form submitted:', { name, email, message });

    // Reset the form
    document.getElementById('contactForm').reset();
    
    // Show a success message
    alertMessage.textContent = 'Thank you for contacting us!';
    alertMessage.className = 'alert success';
    alertMessage.style.display = 'block';
    

    // Hide the alert message after a few seconds (optional)
    setTimeout(() => {
        
        alertMessage.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}

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
