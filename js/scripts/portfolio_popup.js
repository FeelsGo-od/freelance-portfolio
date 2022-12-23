let openBtn = document.querySelectorAll('.portfolio-btn');

export default function portfolioPopup() {
  for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', (e) => {
      e.preventDefault();

      let popup =
        openBtn[i].parentElement.previousElementSibling.previousElementSibling;

      popup ||=
        openBtn[i].parentElement.parentElement.parentElement.querySelector(
          '.portfolio_popup'
        );

      popup.style.opacity = '1';
      popup.style.transform = 'none';

      let closeBtn = popup.querySelector('.popup-close');
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.opacity = '0';
        popup.style.transform = 'rotateX(90deg)';
      });

      let popupLink = popup.querySelector('.popup-link');
      if (popupLink) {
        popupLink.onclick = function (e) {
          e.preventDefault();
          popupLink.classList.remove('popup-link');
          window.open(popupLink.className, '_blank');
        };
      }
    });
  }
}
