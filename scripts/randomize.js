// Define the scrollToRandomComic function
function scrollToRandomComic() {
    const comics = document.querySelectorAll('.comic-section');
    const randomIndex = Math.floor(Math.random() * comics.length);
    const randomComic = comics[randomIndex];

    randomComic.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
