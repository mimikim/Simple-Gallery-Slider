var slider = slider || (function() {

        var slider = $('#slider'),
            slides = slider.find('.slider-image'),
            slides_length = slides.length;

        var prev = $('#prev'),
            next = $('#next');

        var currentIndex = 0;

        function load_slide( index ) {
            if(index == null ) { index = currentIndex; }
            if( slider.hasClass('hide') ) { slider.removeClass('hide'); }
            slider.html(slides[index]);
        }

        prev.on('click', function() {
            // if current index == 0, previous element loops back to length
            if( currentIndex == 0 ) {
                currentIndex = (slides_length-1);
            } else {
                currentIndex--;
            }
            load_slide(currentIndex);
        });

        next.on('click', function() {
            // if current index == length, next is 0
            if( currentIndex == (slides_length-1) ) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            load_slide(currentIndex);
        });

    return {
        load_slide : load_slide
    }
})();

$(document).ready(function() {
    slider.load_slide();
});
