let arrowBtn = document.querySelector('.down-scroll');

export default function downScroll() {
  if (!arrowBtn) return;

  arrowBtn.addEventListener('click', () => {
    window.scrollBy(0, window.innerHeight);
  });
}
