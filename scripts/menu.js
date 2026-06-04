const navbar = document.getElementById('navbar');
const headerSpace = document.querySelector('.headerSpace');
const header = document.querySelector('header');

function toggleMenu() {
    
    navbar.classList.toggle('nav-visible');
    headerSpace.classList.toggle('headerSpaceExpanded');
  } 



// Change navbar appearance when the footer becomes visible
function observeFooterVisibility() {

    if (!header || !headerSpace) {
      console.warn('Header or .headerSpace not found. Footer visibility observation will not work.');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                console.log('.headerSpace is visible. Removing header-visible class from header');
                header.classList.remove('header-visible');
            } else {
                console.log('.headerSpace is not visible. Adding header-visible class to header.');
                header.classList.add('header-visible');
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