document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    if (header) {
        header.innerHTML = `
            <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <img src="./images/logo.png" loading="lazy" alt="logo" width="70" height="70">
                <div class="name">
                </div>
            </div>
            <div class="hamburguer" onclick="toggleMenu()">☰</div>
            <nav class="navbar" id="navbar">
                <a href="index.html">Home</a>
                <a href="#">Servicios para ti</a>
                <a href="#">Servicios para tu negocio</a>
                <a href="#">Quienes Somos</a>
            </nav>
        `;
    }
});