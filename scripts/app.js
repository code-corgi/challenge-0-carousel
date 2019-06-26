const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}
slides.forEach(setSlidePosition)

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide')
})