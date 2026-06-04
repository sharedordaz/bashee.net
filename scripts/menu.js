function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('nav-visible');

    const headerSpace = document.querySelector('.headerSpace');
    headerSpace.classList.toggle('headerSpaceExpanded');
  } 



// Change navbar appearance when the footer becomes visible
function observeFooterVisibility() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (!header || !footer) {
      console.warn('Header or footer not found. Footer visibility observation will not work.');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                console.log('Footer is visible. Adding footer-visible class to header.');
                header.classList.add('footer-visible');
            } else {
                console.log('Footer is not visible. Removing footer-visible class from header.');
                header.classList.remove('footer-visible');
            }
        }
    }, {
        threshold: 0.1
    });

    observer.observe(footer);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', observeFooterVisibility);

//OTHER FUNCTION