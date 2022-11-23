const totalBtn = document.querySelector('.total__btn');

const clientForm = document.querySelector('.client__form');

const nameInput = document.querySelector('.client__name');
const surnameInput = document.querySelector('.client__surname');
const emailInput = document.querySelector('.client__email');
const phoneInput = document.querySelector('.client__number');
const indexInput = document.querySelector('.client__index');

totalBtn.addEventListener('click', () => {
  if (!nameInput.value.length) {
    console.log('name');
    nameInput.classList.add('empty-input');
  }
  if (!surnameInput.value.length) {
    console.log('surname');
    surnameInput.classList.add('empty-input');
  }
  if (!emailInput.value.length) {
    console.log('email');
    emailInput.classList.add('empty-input');
  }
  if (!phoneInput.value.length) {
    console.log('phone');
    phoneInput.classList.add('empty-input');
  }
  if (!indexInput.value.length) {
    console.log('index');
    indexInput.classList.add('empty-input');
  }
});

clientForm.addEventListener('input', (e) => {
  e.target.classList.remove('empty-input');

  if (e.target === nameInput) {
  } else if (e.target === surnameInput) {
  } else if (e.target === emailInput) {
    if (validateEmail(e.target.value) && e.target.value.length) {
      console.log('ok');
      emailInput.classList.remove('wrong-input');
      document.querySelector('.email-warn')?.remove();
    }
  } else if (e.target === phoneInput) {
    const ALLOWED_PHONE_SYMBOLS = '0123456789+';
    e.target.value = e.target.value
      .split('')
      .filter((sym) => ALLOWED_PHONE_SYMBOLS.includes(sym))
      .join('')
      .slice(0, 30);
    e.target.value =
      e.target.value.slice(0, -10) +
      ' ' +
      e.target.value.slice(-10, -7) +
      ' ' +
      e.target.value.slice(-7, -4) +
      ' ' +
      e.target.value.slice(-4, -2) +
      ' ' +
      e.target.value.slice(-2);

    if (validatePhone(e.target.value) && e.target.value.length) {
      console.log('ok');
      phoneInput.classList.remove('wrong-input');
      document.querySelector('.phone-warn')?.remove();
    }
  } else if (e.target === indexInput) {
    if (validateIndex(e.target.value) && e.target.value.length) {
      const indexWarn = document.querySelector('.index-info');
      console.log('ok');
      indexInput.classList.remove('wrong-input');
      indexWarn.classList.remove('index-warn');
      indexWarn.innerHTML = 'Для таможенного оформления';
    }
  }
});

clientForm.addEventListener('focusout', (e) => {
  console.log(e.target);

  if (e.target === nameInput) {
  } else if (e.target === surnameInput) {
  } else if (e.target === emailInput) {
    if (!validateEmail(e.target.value) && e.target.value.length) {
      if (!document.querySelector('.email-warn')) {
        const emailWarn = document.createElement('div');
        console.log('not ok');
        emailWarn.innerHTML = 'Проверьте адрес электронной почты';
        emailWarn.className = 'email-warn';
        emailInput.after(emailWarn);
        emailInput.classList.add('wrong-input');
      }
    } else if (validateEmail(e.target.value) && e.target.value.length) {
      console.log('ok');
      emailInput.classList.remove('wrong-input');
      document.querySelector('.email-warn')?.remove();
    }
  } else if (e.target === phoneInput) {
    if (!validatePhone(e.target.value) && e.target.value.length) {
      if (!document.querySelector('.phone-warn')) {
        const phoneWarn = document.createElement('div');
        console.log('not ok');
        phoneWarn.innerHTML = 'Формат: +9 999 999 99 99 или 9 999 999 99 99';
        phoneWarn.className = 'phone-warn';
        phoneInput.after(phoneWarn);
        phoneInput.classList.add('wrong-input');
      }
    } else if (validatePhone(e.target.value) && e.target.value.length) {
      console.log('ok');
      phoneInput.classList.remove('wrong-input');
      document.querySelector('.phone-warn')?.remove();
    }
  } else if (e.target === indexInput) {
    if (!validateIndex(e.target.value) && e.target.value.length) {
      const indexWarn = document.querySelector('.index-info');

      if (!document.querySelector('.index-warn')) {
        console.log('not ok');
        indexWarn.innerHTML = 'Формат: 1234567';
        indexWarn.classList.add('index-warn');
        indexInput.classList.add('wrong-input');
      }
    } else if (validateIndex(e.target.value) && e.target.value.length) {
      console.log('ok');
      indexInput.classList.remove('wrong-input');
      indexWarn.classList.remove('index-warn');
    }
  }
});

function validateEmail(value) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return EMAIL_REGEXP.test(value);
}

function validateIndex(value) {
  const INDEX_REGEXP1 = /^\d{5}(?:[-\s]?\d{4})?$/;
  const INDEX_REGEXP2 = /^\d{6,9}$/;

  return INDEX_REGEXP1.test(value) || INDEX_REGEXP2.test(value);
}

function validatePhone(value) {
  const PHONE_REGEXP =
    /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

  return PHONE_REGEXP.test(value);
}
