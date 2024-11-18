// Переключение меню для мобильных устройств
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}

// Модальное окно
function showModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
