function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const headerSpace = document.querySelector('.headerSpace');

    if (navbar) {
        navbar.classList.toggle('nav-visible');
    }

    if (headerSpace) {
        headerSpace.classList.toggle('headerSpaceExpanded');
    }
}


// Change navbar appearance when the footer becomes visible
function observeFooterVisibility() {
    const navbar = document.getElementById('navbar');
    const headerSpace = document.querySelector('.headerSpace');
    const header = document.querySelector('header');
    const imgLogo = document.getElementById('header-logo');
    const footer = document.querySelector('footer');

    if (!navbar || !header || !headerSpace || !footer) {
        console.warn('Required elements for footer observation were not found.');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                console.log('.headerSpace is visible. Removing header-visible class from header');
                header.classList.remove('header-visible');
                if (imgLogo) {
                    imgLogo.src = './images/logo.png';
                }
            } else {
                console.log('.headerSpace is not visible. Adding header-visible class to header.');
                header.classList.add('header-visible');
                if (imgLogo) {
                    imgLogo.src = './images/logo_white_header.png';
                    imgLogo.style.filter = 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))';
                }
            }
        }
    }, {
        threshold: 0.1
    });

    observer.observe(headerSpace);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', observeFooterVisibility);

//OTHER FUNCTION