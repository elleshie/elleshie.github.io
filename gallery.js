document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".full-gallery img");
    const overlay = document.querySelector(".overlay");
    const overlayImg = overlay.querySelector("img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            overlayImg.src = this.src;
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("active");
    });
});
