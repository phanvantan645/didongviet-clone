$(document).ready(function () {
    $('.home-top-promotion .owl-carousel').owlCarousel({
        dotsEach: true,
        dragEndSpeed: true,
        loop: true,
        items: 1,
        dotsClass: 'owl-pagination',
        autoplayTimeout: 5000,
        autoplay: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>`,
        ],
        smartSpeed: 450,
        slideTransition: 'ease-in-out',
    });

    $('.influence-slider-wrapper .owl-carousel').owlCarousel({
        dotsEach: true,
        margin: 10,
        dragEndSpeed: true,
        loop: true,
        items: 4,
        dots: false,
        autoplayTimeout: 5000,
        autoplay: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>`,
        ],
        smartSpeed: 450,
        slideTransition: 'ease-in-out',
    });
    $('.slider-flash-sale.owl-carousel').owlCarousel({
        dotsEach: true,
        margin: 16,
        dragEndSpeed: true,
        loop: true,
        items: 5,
        dots: false,
        autoplayTimeout: 5000,
        autoplay: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>`,
        ],
        smartSpeed: 450,
        slideTransition: 'ease-in-out',
    });
    $('.group-slider.owl-carousel').owlCarousel({
        dragEndSpeed: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoPlay: true,
                autoplayTimeout: 5000,
            },
            1024: {
                items: 2,
                dots: false,
                dotsEach: true,
                margin: 10,
                stagePadding: 5,
            },
        },

        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>`,
        ],
        smartSpeed: 450,
        slideTransition: 'ease-in-out',
    });
    $('.box-featured-products.owl-carousel').owlCarousel({
        dotsEach: true,
        margin: 10,
        stagePadding: 5,
        dragEndSpeed: true,
        loop: true,
        items: 4,
        dots: false,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>`,
        ],
        smartSpeed: 450,
        slideTransition: 'ease-in-out',
    });
});
