var link = document.querySelector('.button-writeus');
var popup = document.querySelector('.modal-feedback');
var close = popup.querySelector('.modal-close');
var form = popup.querySelector('.feedback-form');
var username = form.querySelector('.name-input');
var email = form.querySelector('[name=email]');
var letter = form.querySelector('[name=letter]');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('click');
  popup.classList.add('modal-feedback-show');
  console.log(username);
  username.focus();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-feedback-show');
  popup.classList.remove('modal-feedback-error');
});

form.addEventListener('submit', function (evt) {
  if (!username.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove('modal-feedback-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-feedback-error');
    console.log('нужно ввести имя, e-mail и текст сообщения');
  }
});

