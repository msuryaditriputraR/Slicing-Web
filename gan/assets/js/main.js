/* ==================== TEAMS SLIDER ===================== */
const swiper = new Swiper(".home3__teams", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 0,
        modifier: 2.5,
        stretch: 20,
        slideShadows: false,
        scale: 0.95,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* ==================== YEAR ===================== */
const year = document.getElementById("year");
const date = new Date();

year.innerHTML = date.getFullYear();
