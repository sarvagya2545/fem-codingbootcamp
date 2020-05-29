const testimonials = Array.from(document.querySelectorAll('.testimonial'));
const leftBtns = document.querySelectorAll('.slider__img--left');
const rightBtns = document.querySelectorAll('.slider__img--right');

leftBtns.forEach(function(leftBtn){
    leftBtn.addEventListener('click', function(){
        var currentSlide = document.querySelector('.testimonial--current');
        var currentSlideIndex = testimonials.indexOf(currentSlide);
        var leftSlideIndex;
        
        if( currentSlideIndex - 1 >= 0 ) {
            leftSlideIndex = currentSlideIndex - 1;
        } else {
            leftSlideIndex = testimonials.length - 1;
        }   
        var leftSlide = testimonials[leftSlideIndex];
        moveToTarget(currentSlide, leftSlide);
    });    
});

rightBtns.forEach(function(rightBtn){
    rightBtn.addEventListener('click', function(){
        var currentSlide = document.querySelector('.testimonial--current');
        var currentSlideIndex = testimonials.indexOf(currentSlide);
        var rightSlideIndex;
        
        if( currentSlideIndex + 1 <= testimonials.length - 1 ) {
            rightSlideIndex = currentSlideIndex + 1;
        } else {
            rightSlideIndex = 0;
        }
        var rightSlide = testimonials[rightSlideIndex];
        moveToTarget(currentSlide, rightSlide);
    }); 
});

function moveToTarget(currentSlide, targetSlide) {
    currentSlide.classList.remove('testimonial--current');
    targetSlide.classList.add('testimonial--current');
}