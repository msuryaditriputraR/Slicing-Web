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

/* ==================== UTILS ===================== */
function removeAllState(elem, state) {
    elem.forEach((el) => el.classList.remove(state));
}
