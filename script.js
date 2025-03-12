// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Make the discover buttons interactive
document.querySelectorAll('.discover-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const gamePageUrl = "https://github.com/UsagerLambda/DemoDay-Rubik-scape/releases";
        window.open(gamePageUrl, '_blank');
    });
});
