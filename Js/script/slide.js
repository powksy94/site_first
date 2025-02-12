/* let slideIndex = 0;
let canClick = true; // Flag pour contrôler les clics

function showSlides(index) {
    const slides = document.querySelectorAll('.destination');
    if (index >= slides.length) slideIndex = 0; // Retourne au début si on dépasse
    if (index < 0) slideIndex = slides.length - 1; // Retourne à la fin si on est en arrière

    // Ajuste le conteneur
    const scroleContainer = document.querySelector('.scrole-container');
    scroleContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

   // Gestion de la visibilité des flèches
   const prevButton = document.querySelector('.prev');
   const nextButton = document.querySelector('.next');

   // Montre ou cache les flèches selon la position de la diapositive
   prevButton.classList.toggle('hidden', slideIndex === 0);
   nextButton.classList.toggle('hidden', slideIndex === slides.length - 1);


function plusSlides(n) {
        if (canClick) { // Vérifie si le clic est autorisé
            canClick = false; // Désactive les clics
            slideIndex += n; // Change l'index
            showSlides(slideIndex); // Affiche la diapositive correspondante
            setTimeout(() => {
            canClick = true; // Réactive les clics après un délai
            }, 500); // Délai de 500 ms
        }
    }
// Affiche la première slide au chargement
showSlides(slideIndex);
*/

