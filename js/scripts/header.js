let mobileMenu = document.querySelector('.nav_menu');
let openBtn = document.querySelector('.nav_hamb');
let closeBtn = document.querySelector('.nav_close');
let linkToProjects = document.querySelector('.home_proj-link');
let headerTitle = document.querySelector('.home_title');

export default function header() {
  // Open Navigation
  openBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    mobileMenu.style.transform = 'translateX(0)';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    mobileMenu.style.transform = 'translateX(990px)';
  });

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    if (!linkToProjects) return;
    linkToProjects.innerHTML = '<a href="#portfolio">at the bottom</a>';
  }

  // Header Title Color
  if (headerTitle) {
    headerTitle.querySelector('em').style.color = '#49AD09';
    headerTitle.querySelector('em').style.fontStyle = 'normal';
  }
}
