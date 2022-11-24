const paymentChange = document.querySelector('.payment__change');
const paymentPopup = document.querySelector('.payment .modal');
const paymentBtn = document.querySelector('.payment__btn');
const paymentPopupBody = document.querySelector('.payment__modal');
const paymentClose = document.querySelector('.payment .modal__close');
const paymentCurrent = document.querySelector('.payment__current');

const paymentOptions = Array.from(
  document.querySelectorAll('.payment .modal .payment__item')
);

paymentChange.addEventListener('click', () => {
  paymentPopup.style.display = 'flex';
});

paymentBtn.addEventListener('click', () => {
  paymentPopup.style.display = 'none';
  paymentCurrent.innerHTML = '';
  const selectedOptionIndex = document.querySelector(
    '.payment__radio input[type="radio"]:checked'
  ).value;
  paymentCurrent.append(
    paymentOptions[selectedOptionIndex - 1].cloneNode(true)
  );
});

paymentPopupBody.addEventListener('click', (e) => {
  e.stopPropagation();
});

paymentPopup.addEventListener('click', () => {
  paymentPopup.style.display = 'none';
});

paymentClose.addEventListener('click', () => {
  paymentPopup.style.display = 'none';
});
