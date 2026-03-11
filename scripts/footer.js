document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = `
            <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <img src="images/b_transparent.png" loading="lazy" alt="logo" width="70" height="60">
                <div class="name">
                </div>
            </div>
            <div class="social">
                <a href="https://www.instagram.com/basheetech/">Instagram<img src="images/social/instagram.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="https://www.facebook.com/basheetech/">Facebook<img src="images/social/facebook.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="https://wa.me/525561794508">Whats App<img src="images/social/WhatsApp.webp" alt="Teléfono Logo" loading="lazy"> </a>
            </div>
        `;
    }
});