// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button click example (can extend for forms)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log("Button clicked: " + button.textContent);
    });
});

