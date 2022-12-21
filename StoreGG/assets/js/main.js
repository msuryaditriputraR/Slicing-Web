/*=============== NAV TOGGLE ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active-menu");
});

/* === CLOSE MENU When menu-item was clicked === */
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active-menu");
    });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW / HIDE ELEMENT SCROLL UP ===============*/
function toggleElement(elementId, elementClass) {
    const element = document.getElementById(elementId);

    element.classList[this.scrollY >= 130 ? "add" : "remove"](elementClass);
}

window.addEventListener("scroll", () => {
    /* === Hide Muse === */
    toggleElement("mouse-scroll", "hide-mouse");

    /* === Show Scroll === */
    toggleElement("scroll-up", "show-scroll");
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionClass = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);
