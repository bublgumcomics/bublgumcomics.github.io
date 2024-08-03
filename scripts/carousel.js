const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 320; // 280px width + 10px margin on each side
    carousel.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 2) { // Show 3 images at a time
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
