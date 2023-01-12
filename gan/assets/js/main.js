/* ==================== BASE URL ===================== */
const baseURL = window.location.origin;

/* ==================== TEAMS SLIDER ===================== */
const swiper = new Swiper(".home3__teams", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
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
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

/* ==================== YEAR ===================== */
const year = document.getElementById("year");
const date = new Date();

year.innerHTML = date.getFullYear();

/* ==================== SCROLL HEADER ===================== */
function scrollHeader() {
    const header = document.getElementById("header"),
        logo = document.querySelector(".nav__logo img");
    let logoName = "logo";

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
        logoName = "logo-icon";
    } else {
        header.classList.remove("scroll-header");
        logoName = "logo";
    }

    logo.src = `${baseURL}/assets/img/${logoName}.png`;
}

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function showScrollup(idScrollUp) {
    const scrollUp = document.getElementById(idScrollUp);

    scrollUp.classList[this.scrollY >= 130 ? "add" : "remove"](
        "active-scrollup"
    );
}

window.addEventListener("scroll", () => showScrollup("scroll-up"));

/* ==================== TOGGLE MENU ===================== */
function toggleMenu(idToggle, idMenu) {
    const navToggle = document.getElementById(idToggle);
    const navMenu = document.getElementById(idMenu);

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active-menu");
        });

        navMenu.addEventListener("click", (e) => e.stopPropagation());

        document.body.addEventListener("click", () => {
            if (navMenu.classList.contains("active-menu"))
                navMenu.classList.remove("active-menu");
        });
    }
}

toggleMenu("nav-toggle", "nav-menu");

/* ==================== SCROLL REVEAL ANIMATION ===================== */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 3000,
    delay: 400,
    // reset: true,
});

sr.reveal(".home1__title, .home3__title,.section-title, .footer__logo");
sr.reveal(".home1__desc, .about__desc, .armada__img, .contact__list", {
    delay: 500,
});
sr.reveal(".home1__image, .gudang__img", { delay: 600 });
sr.reveal(".home1 .btn, .about__img", { delay: 700 });
sr.reveal(
    ".footer__social, .footer__map, .armada__img, .gudang__img, .contact__item, .contact__card",
    { interval: 100 }
);
sr.reveal(
    ".home2__image, .product1__img, .product2__img, .contact__card:nth-child(odd)",
    { origin: "left" }
);
sr.reveal(
    ".home2__info, .product1__table, .product2__list, .contact__card:nth-child(even)",
    {
        origin: "right",
    }
);
sr.reveal(".home3 .btn", { origin: "bottom" });
