document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.right_button_carousel');
    const nextButton = document.querySelector('.left_button_carousel');
    const rolador = document.querySelector('.rolador');
    const slides = document.querySelectorAll('.about_arquivo');
  
    let currentIndex = 0;
  
    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }
      
        const offset = -currentIndex * 100;
        rolador.style.transform = `translateX(${offset}%)`;
    }
  
    prevButton.addEventListener('click', () => {
        currentIndex--;
        showSlide(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
        currentIndex++;
        showSlide(currentIndex);
    });
  
    // Inicializa a primeira imagem
    showSlide(currentIndex);
});
