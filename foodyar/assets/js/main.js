/* ==================== TABS ===================== */
function handleTab(tabClass, contentClass) {
    // SELECT ELEMENTS
    const tabs = document.querySelectorAll(tabClass),
        contents = document.querySelectorAll(contentClass);

    // CHECK IF ELEMENTS EXIST
    if (tabs && contents) {
        tabs.forEach((tab) => {
            // EVENT WHEN TAB CLICKED
            tab.addEventListener("click", function () {
                // REMOVE STATE ACTIVE IN ALL TABS
                removeAllState(tabs, "active");

                // ADD STATE ACTIVE IN THIS TAB
                this.classList.add("active");

                // GET THIS CONTENT
                const tabContent = this.getAttribute("aria-controls");

                contents.forEach((content) => {
                    // HIDE ALL CONTENT
                    content.style.display = "none";

                    // SHOW THIS CONTENT
                    if (tabContent === content.id)
                        content.style.display = "grid";
                });
            });
        });
    }
}

handleTab(".features__tab", ".features__cards");

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/* ==================== TOGGLE MENU ===================== */
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active-toggle");
    navList.classList.toggle("active-menu");
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

/* ==================== UTILS ===================== */
function removeAllState(elem, state) {
    elem.forEach((el) => el.classList.remove(state));
}
