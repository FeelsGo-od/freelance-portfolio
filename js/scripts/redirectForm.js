export default function redirectForm() {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function () {
      window.location.href = '/contact_success.html';
    });
  });
}
