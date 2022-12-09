export default function formRedirect() {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function () {
      window.location.href = '/contact_success';
    });
  });
}
