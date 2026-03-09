document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    if (header) {
        header.innerHTML = `
            <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <img src="logo" loading="lazy" alt="logo" width="70" height="70">
                <div class="name">
                    <h2>Template</h2>
                </div>
            </div>
            <div class="hamburguer" onclick="toggleMenu()">☰</div>
            <nav class="navbar" id="navbar">
                <a href="index.html">Home</a>
                <a href="view1.html">View 1</a>
                <a href="view2.html">View 2</a>
                <a href="view3.html">View 3</a>
                <a href="view4.html">View 4</a>
                <a href="view5.html">View 5</a>
                <a href="view6.html">View 6</a>
            </nav>
        `;
    }
});