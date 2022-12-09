export default function formErrorRedirect() {
  if (document.title.includes('Error')) {
    window.location.href = '/contact_success';
  }
}
