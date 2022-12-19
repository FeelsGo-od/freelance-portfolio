const form = document.querySelector('#form');

export default function emailForm() {
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let myText = `${email} wants to work with you ;)`;

    let token = '5802490856:AAHz3o_W0SKEd3W5vaVcjeelRkfzU1NNjp4';
    let chat_id = -618226943;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${myText}`;

    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    if (email !== '') {
      api.send();

      window.location.href =
        window.location.protocol +
        '//' +
        window.location.host +
        '/contact_success.html';
    }
  });
}
