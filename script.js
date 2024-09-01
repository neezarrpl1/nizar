// Tambahkan kode berikut ke file script.js
document.addEventListener("DOMContentLoaded", function() {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            item.classList.add("hover");
        });
        item.addEventListener("mouseout", function() {
            item.classList.remove("hover");
        });
    });
});