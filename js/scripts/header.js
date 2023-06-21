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
    mobileMenu.style.width = '89%'
    mobileMenu.style.height = '100%'
    mobileMenu.style.position = 'fixed'
    for(const [key, value] of Object.entries(mobileMenu.getElementsByTagName('li'))) {
      mobileMenu.getElementsByTagName('li')[key].style.paddingLeft = '30px'
    }
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
}