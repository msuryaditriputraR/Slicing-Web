/* ==================== DRAG TO SCROLL ===================== */

function dragToScroll(elemID) {
    const elem = document.getElementById(elemID);

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    if (elem) {
        const mouseDownHandler = function (e) {
            pos = {
                // The current scroll
                left: elem.scrollLeft,
                top: elem.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };

            // Change the cursor and prevent user from selecting the text
            elem.style.cursor = "grabbing";
            elem.style.userSelect = "none";

            elem.addEventListener("mousemove", mouseMoveHandler);
            elem.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;

            // Scroll the element
            elem.scrollTop = pos.top - dy;
            elem.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
            elem.removeEventListener("mousemove", mouseMoveHandler);
            elem.removeEventListener("mouseup", mouseUpHandler);

            elem.style.cursor = "grab";
            elem.style.removeProperty("user-select");
        };

        elem.addEventListener("mousedown", mouseDownHandler);
    }
}

dragToScroll("clients-cards");
dragToScroll("documentation-cards");

/* ==================== SCROLL HEADER ===================== */
function scrollHeader() {
    const header = document.getElementById("header");

    header.classList[this.scrollY >= 50 ? "add" : "remove"]("scroll-header");
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
