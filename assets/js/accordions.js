/**
 * NOTE: h6.newletter-heading co phan tu lien ke (nextElementSibling) la div.newletter-slide-group
 *        previousElementSibling >< nextElementSibling
 */
const newletterHeadings = document.querySelectorAll(".newletter-heading");

newletterHeadings.forEach((h) => {
    h.addEventListener("click", () => {
        const newletterSpan = h.querySelector(".newletter-span");
        const newletterSlideDown = h.nextElementSibling; // tim phan tu lien ke cung cap vs h6

        // dong noi dung cua 1 heading khac dang mo khi mo noi dung cua heading hien tai
        document.querySelectorAll(".newletter-slide-group").forEach((g) => {
            const icon =
                g.previousElementSibling.querySelector(".newletter-span");
            if (g !== newletterSlideDown) {
                g.classList.remove("open");
                icon.textContent = "+";
            }
        });

        // Dong mo noi dung heading hien tai
        if (!newletterSlideDown.classList.contains("open")) {
            newletterSpan.textContent = "-";
            newletterSlideDown.classList.add("open");
        } else {
            newletterSpan.textContent = "+";
            newletterSlideDown.classList.remove("open");
        }
    });
});