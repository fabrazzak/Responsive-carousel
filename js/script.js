/* document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = carouselItems[0].clientWidth;
        const translateX = -currentIndex * itemWidth;
        carouselInner.style.transform = `translateX(${translateX }px)`;
        console.log(carouselItems)
    };

    const getVisibleItems = () => {
        if (window.innerWidth >= 1200) {
            return 4; // 4 items per view on large screens
        } else if (window.innerWidth >= 768) {
            return 2; // 3 items per view on medium screens
        } else if (window.innerWidth >= 576) {
            return 1; // 2 items per view on small screens
        } else {
            return 1; // 1 item per view on extra-small screens
        }
    };

    nextButton.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleItems; // Loop back to the end
        }
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); // Initial update
});
 */


document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = carouselItems[0].clientWidth;
        const translateX = -currentIndex * itemWidth;
        carouselInner.style.transform = `translateX(${translateX}px)`;
    };

    const getVisibleItems = () => {
        const width = window.innerWidth;
        if (width >= 1200) return 4;    // 4 items per view on large screens
        if (width >= 768) return 2;     // 2 items per view on medium screens
        if (width >= 576) return 1;     // 1 item per view on small screens
        return 1;                       // 1 item per view on extra-small screens
    };

    const handleNextClick = () => {
        const visibleItems = getVisibleItems();
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateCarousel();
    };

    const handlePrevClick = () => {
        const visibleItems = getVisibleItems();
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleItems; // Loop back to the end
        }
        updateCarousel();
    };

    // Attach event listeners
    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);
    window.addEventListener('resize', updateCarousel);

    // Initial update
    updateCarousel();
});
