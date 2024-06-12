document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci pour votre message. Nous vous répondrons bientôt.');
        form.reset();
    });
});
