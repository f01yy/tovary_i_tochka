const deliveryChange = document.querySelector('.delivery__change');
const deliveryPopup = document.querySelector('.delivery .modal');
const deliveryBtn = document.querySelector('.delivery__btn');
const deliveryPopupBody = document.querySelector('.delivery__modal');
const deliveryClose = document.querySelector('.delivery .modal__close');
const totalDeliveryChange = document.querySelector('.total__delivery button');
const currentAddress = document.querySelector(
  '.delivery__item .delivery__address'
);
const totalCurrentAddress = document.querySelector('.total__address');
const totalDeliveryHeader = document.querySelector('.total__delivery h3');

const addressDelBtns = Array.from(
  document.querySelectorAll('.delivery__addresses .del')
);

const deliveryMethods = Array.from(
  document.querySelectorAll('.delivery__method')
);

const deliveryOptions = Array.from(
  document.querySelectorAll('.delivery__addresses .delivery__address')
);

let selectedMethod = null;

deliveryMethods.forEach((method) =>
  method.addEventListener('click', () => {
    selectedMethod = method;
    method.classList.add('active');

    deliveryMethods
      .filter((m) => m !== method)
      .forEach((m) => m.classList.remove('active'));
  })
);

deliveryChange.addEventListener('click', () => {
  deliveryPopup.style.display = 'flex';
});
deliveryPopupBody.addEventListener('click', (e) => {
  e.stopPropagation();
});
deliveryPopup.addEventListener('click', () => {
  deliveryPopup.style.display = 'none';
});
deliveryClose.addEventListener('click', () => {
  deliveryPopup.style.display = 'none';
});
totalDeliveryChange.addEventListener('click', () => {
  deliveryPopup.style.display = 'flex';
});

deliveryBtn.addEventListener('click', () => {
  deliveryPopup.style.display = 'none';
  const selectedAddress = document.querySelector(
    '.delivery__addresses input[type="radio"]:checked'
  );

  if (selectedAddress) {
    currentAddress.innerHTML =
      deliveryOptions[Number(selectedAddress.value) - 1].innerHTML;

    totalCurrentAddress.innerHTML =
      deliveryOptions[Number(selectedAddress.value) - 1].innerHTML;
  }

  if (selectedMethod) {
    totalDeliveryHeader.innerHTML =
      'Доставка ' + selectedMethod.innerHTML.toLowerCase();
  }
});

addressDelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('label').remove();
  });
});
