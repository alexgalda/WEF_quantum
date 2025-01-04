
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.opacity = '0'; // Hide all slides
        slide.style.display = 'none'; // Ensure slides do not take space
    });
    slides[index].style.display = 'block'; // Show only the active slide
    slides[index].style.opacity = '1';
}

slides.forEach((slide, idx) => {
    slide.addEventListener('mouseover', () => showSlide(idx));
});

// Initialize first slide visibility
showSlide(currentIndex);
