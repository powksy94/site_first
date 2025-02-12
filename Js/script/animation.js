document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');

    numbers.forEach(num => {
        const count = parseInt(num.getAttribute('data-count'));
        let currentCount = 0;

        const updateCount = () => {
            if (currentCount < count) {
                currentCount++;
                num.textContent = currentCount;
                setTimeout(updateCount, 50); // Vitesse d'incrémentation
            } else {
                num.textContent = count; // Assure que le nombre final est affiché
            }
        };

        updateCount();
    });
});
