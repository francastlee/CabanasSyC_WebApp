document.addEventListener('DOMContentLoaded', () => {

    function setupCarousel(carouselId, prevSelector, nextSelector, indicatorSelector) {
        const carousel = document.querySelector(carouselId);
        const prevButton = carousel.querySelector(prevSelector);
        const nextButton = carousel.querySelector(nextSelector);
        const indicators = carousel.querySelectorAll(indicatorSelector);
        let index = 0;
        let autoSlideInterval;
        const autoSlideDelay = 3000; 

        function showSlide(n) {
            const slides = carousel.querySelectorAll('.carousel-item');
            if (n >= slides.length) index = 0;
            if (n < 0) index = slides.length - 1;
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            indicators.forEach((indicator, i) => {
                indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
            });
        }

        function nextSlide() {
            index++;
            showSlide(index);
        }

        function prevSlide() {
            index--;
            showSlide(index);
        }

        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                index = i;
                showSlide(index);
                resetAutoSlide();
            });
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }
        startAutoSlide();
        showSlide(index);
    }

    setupCarousel('#carousel1', '[data-carousel-prev1]', '[data-carousel-next1]', '[data-carousel-slide-to1]');
    setupCarousel('#carousel2', '[data-carousel-prev2]', '[data-carousel-next2]', '[data-carousel-slide-to2]');
});
