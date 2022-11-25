const paymentChange = document.querySelector('.payment__change');
const paymentPopup = document.querySelector('.payment .modal');
const paymentBtn = document.querySelector('.payment__btn');
const paymentPopupBody = document.querySelector('.payment__modal');
const paymentClose = document.querySelector('.payment .modal__close');
const paymentCurrent = document.querySelector('.payment__current');
const totalPaymentChange = document.querySelector('.total__payment button');
const totalPaymentCurrent = document.querySelector('.total__card');

const paymentDelBtns = Array.from(
  document.querySelectorAll('.payment__radio .del')
);

const paymentOptions = Array.from(
  document.querySelectorAll('.payment .modal .payment__item')
);

paymentChange.addEventListener('click', () => {
  paymentPopup.style.display = 'flex';
});

totalPaymentChange.addEventListener('click', () => {
  paymentPopup.style.display = 'flex';
});

paymentBtn.addEventListener('click', () => {
  paymentPopup.style.display = 'none';
  const selectedPayment = document.querySelector(
    '.payment__radio input[type="radio"]:checked'
  );

  if (selectedPayment) {
    paymentCurrent.innerHTML = '';
    paymentCurrent.append(
      paymentOptions[selectedPayment.value - 1].cloneNode(true)
    );

    totalPaymentCurrent.innerHTML = '';
    totalPaymentCurrent.append(
      paymentOptions[selectedPayment.value - 1].cloneNode(true)
    );
  }
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

paymentDelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('label').remove();
  });
});
