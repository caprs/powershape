document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Atualiza o índice da imagem
        const offset = -100 * currentIndex; // Calcula o deslocamento
        carouselImages.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
    }

    setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos
});
