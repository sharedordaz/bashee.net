function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('nav-visible');

    const headerSpace = document.querySelector('.headerSpace');
    headerSpace.classList.toggle('headerSpaceExpanded');
  } 

  //OTHER FUNCTION