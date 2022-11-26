const totalBtn = document.querySelector('.total__btn');

const clientForm = document.querySelector('.client__form');

const nameInput = document.querySelector('.client__name .client__input');
const surnameInput = document.querySelector('.client__surname .client__input');
const emailInput = document.querySelector('.client__email .client__input');
const phoneInput = document.querySelector('.client__number .client__input');
const indexInput = document.querySelector('.client__index .client__input');

totalBtn.addEventListener('click', () => {
  if (!nameInput.value.length) {
    if (window.innerWidth < 640) {
      nameInput.scrollIntoView();
    }

    nameInput.classList.add('empty-input');
  }
  if (!surnameInput.value.length) {
    if (window.innerWidth < 640) {
      surnameInput.scrollIntoView();
    }

    surnameInput.classList.add('empty-input');
  }
  if (!emailInput.value.length) {
    if (window.innerWidth < 640) {
      emailInput.scrollIntoView();
    }

    emailInput.classList.add('empty-input');
  }
  if (!phoneInput.value.length) {
    if (window.innerWidth < 640) {
      phoneInput.scrollIntoView();
    }

    phoneInput.classList.add('empty-input');
  }
  if (!indexInput.value.length) {
    if (window.innerWidth < 640) {
      indexInput.scrollIntoView();
    }

    indexInput.classList.add('empty-input');
  }
});

clientForm.addEventListener('input', (e) => {
  e.target.classList.remove('empty-input');

  if (e.target === nameInput) {
  } else if (e.target === surnameInput) {
  } else if (e.target === emailInput) {
    if (validateEmail(e.target.value) && e.target.value.length) {
      emailInput.classList.remove('wrong-input');
      document.querySelector('.client__email .warn')?.remove();
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
      phoneInput.classList.remove('wrong-input');
      document.querySelector('.client__number .warn')?.remove();
    }
  } else if (e.target === indexInput) {
    if (validateIndex(e.target.value) && e.target.value.length) {
      const indexWarn = document.querySelector('.index-info');
      indexInput.classList.remove('wrong-input');
      indexWarn.classList.remove('warn');
      indexWarn.innerHTML = 'Для таможенного оформления';
    }
  }
});

clientForm.addEventListener('focusout', (e) => {
  if (e.target === nameInput) {
  } else if (e.target === surnameInput) {
  } else if (e.target === emailInput) {
    if (!validateEmail(e.target.value) && e.target.value.length) {
      if (!document.querySelector('.client__email .warn')) {
        const emailWarn = document.createElement('div');
        emailWarn.innerHTML = 'Проверьте адрес электронной почты';
        emailWarn.className = 'warn';
        emailInput.after(emailWarn);
        emailInput.classList.add('wrong-input');
      }
    } else if (validateEmail(e.target.value) && e.target.value.length) {
      emailInput.classList.remove('wrong-input');
      document.querySelector('.client__email .warn')?.remove();
    }
  } else if (e.target === phoneInput) {
    if (!validatePhone(e.target.value) && e.target.value.length) {
      if (!document.querySelector('.client__number .warn')) {
        const phoneWarn = document.createElement('div');
        phoneWarn.innerHTML = 'Формат: +9 999 999 99 99 или 9 999 999 99 99';
        phoneWarn.className = 'warn';
        phoneInput.after(phoneWarn);
        phoneInput.classList.add('wrong-input');
      }
    } else if (validatePhone(e.target.value) && e.target.value.length) {
      phoneInput.classList.remove('wrong-input');
      document.querySelector('.client__number .warn')?.remove();
    }
  } else if (e.target === indexInput) {
    if (!validateIndex(e.target.value) && e.target.value.length) {
      const indexWarn = document.querySelector('.index-info');

      if (!document.querySelector('.client__index .warn')) {
        indexWarn.innerHTML = 'Формат: 1234567';
        indexWarn.classList.add('warn');
        indexInput.classList.add('wrong-input');
      }
    } else if (validateIndex(e.target.value) && e.target.value.length) {
      indexInput.classList.remove('wrong-input');
      indexWarn.classList.remove('warn');
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

clientForm.addEventListener('focusin', (e) => {
  if (e.target === nameInput) {
    const nameHint = document.createElement('div');
    nameHint.innerHTML = 'Укажите имя';
    nameHint.className = 'hint';
    nameInput.after(nameHint);
  } else if (e.target === surnameInput) {
    const surnameHint = document.createElement('div');
    surnameHint.innerHTML = 'Введите фамилию';
    surnameHint.className = 'hint';
    surnameInput.after(surnameHint);
  } else if (e.target === emailInput) {
    const emailHint = document.createElement('div');
    emailHint.innerHTML = 'Укажите email';
    emailHint.className = 'hint';
    emailInput.after(emailHint);
  } else if (e.target === phoneInput) {
    const phoneHint = document.createElement('div');
    phoneHint.innerHTML = 'Укажите номер телефона';
    phoneHint.className = 'hint';
    phoneInput.after(phoneHint);
  } else if (e.target === indexInput) {
    const indexHint = document.createElement('div');
    indexHint.innerHTML = 'Укажите индекс';
    indexHint.className = 'hint';
    indexInput.after(indexHint);
  }
});

clientForm.addEventListener('focusout', (e) => {
  document.querySelector(`.${e.target.parentElement.className} .hint`).remove();
});
