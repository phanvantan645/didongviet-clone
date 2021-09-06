$(document).ready(function () {
    const body = $('BODY')[0];
    const mobileMenuBtnOpen = $('.mobile-menu .fa-bars');
    const mobileMenuBtnClose = $('.mobile-menu .fa-times');
    const influencer = $('.influencer-slider-container');
    const flashSale = $('.slider-flash-sale');
    const featuredProduct = $('.box-featured-products');
    const mobileAppleImage = $('.box-group-featured .group-left img');
    const footerLinks = $('.footer-link');
    influencer.addClass('owl-carousel');
    console.log(footerLinks);
    function addSlider() {
        window.innerWidth >= 1024
            ? influencer.addClass('owl-carousel') &&
              flashSale.addClass('owl-carousel') &&
              featuredProduct.addClass('owl-carousel') &&
              mobileAppleImage.attr('src', './assets/images/244x524.png')
            : influencer.removeClass('owl-carousel') &&
              flashSale.removeClass('owl-carousel') &&
              featuredProduct.removeClass('owl-carousel') &&
              mobileAppleImage.attr(
                  'src',
                  './assets/images/phu-kien-apple-didongviet.png'
              );
    }
    addSlider();

    footerLinks.on('click', function () {
        this.classList.toggle('active');
    });
    mobileMenuBtnOpen.on('click', function () {
        body.classList.toggle('mobile-menu-active');
    });
    mobileMenuBtnClose.on('click', function () {
        body.classList.toggle('mobile-menu-active');
    });
});
