document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.getElementById("nav").classList.toggle("open");
    });
});