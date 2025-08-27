// Mobile Menu Hambarger
document.getElementById("header-bar").addEventListener("click", function() {
    const mobileMenu = document.getElementById("header-hamburger");
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.replace("hidden", "flex");
    } else if (mobileMenu.classList.contains("flex")) {
        mobileMenu.classList.replace("flex", "hidden");
    }
});