

document.querySelector('.premiereclasse').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rafraîchissement
});




document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        // Toggle l'affichage du contenu associé
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});




seat.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedSeats();
    });
});


let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.destination');

    // Gérer les limites de l'index
    if (index >= slides.length) {
        slideIndex = 0; // Retourne au début
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Retourne à la fin
    } else {
        slideIndex = index; // Met à jour l'index si valide
    }

    // Afficher ou masquer les diapositives
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });

    // Ajuste le conteneur
    const scroleContainer = document.querySelector('.scrole-container');
    scroleContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Fonction pour changer de diapositive
function plusSlides(n) {
    showSlides(slideIndex + n); // Met à jour l'index et affiche la nouvelle diapositive
}

// Affiche la première diapositive au chargement
showSlides(slideIndex);
