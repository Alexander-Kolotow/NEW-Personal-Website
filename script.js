// JavaScript-Code, um den "Nach oben"-Button anzuzeigen und zum Header zu scrollen
document.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        document.querySelector(".up-button").style.display = "block";
    } else {
        document.querySelector(".up-button").style.display = "none";
    }
});

// Scroll-Funktion zum Header
document.querySelector(".up-button").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
