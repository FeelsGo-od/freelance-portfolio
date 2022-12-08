export default function aboutScroll() {
  if (!window.location.href.includes('about')) return;

  if (window.matchMedia('(min-width: 1024px)').matches) {
    let observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          let aboutText = document.querySelector('.about-me_text');
          let topDistance = 0;
          let previousScrollPosition = 0;

          const scrollThrottle = () => {
            let scrollPosition = window.pageYOffset;

            if (
              scrollPosition + aboutText.clientHeight >=
              document.querySelector('.about-me').getBoundingClientRect().bottom
            ) {
              return;
            }

            if (scrollPosition > previousScrollPosition) {
              topDistance = scrollPosition;
            }
            aboutText.style.transform = `translateY(${topDistance}px)`;
          };

          window.addEventListener('scroll', scrollThrottle);
        }
      },
      { threshold: [0] }
    );

    observer.observe(document.querySelector('header'));
  }
}
