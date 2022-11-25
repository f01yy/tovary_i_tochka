import { morph } from './folding.js';

const currency = 'сом';

const totalBtn = document.querySelector('.total__btn');
const totalSum = document.querySelector('.total__sum');
const totalCheckbox = document.querySelector(
  '.total__hint input[type="checkbox"]'
);

const countPluses = Array.from(document.querySelectorAll('.count__plus'));
const countMinuses = Array.from(document.querySelectorAll('.count__minus'));

totalCheckbox.addEventListener('change', () => {
  if (totalCheckbox.checked) {
    totalBtn.innerHTML += ' сразу';
  } else {
    totalBtn.innerHTML = `Оплатить ${totalSum.innerHTML}`;
  }
});

renderTotal();

function renderTotal() {
  let totalSumNumber = 0;
  let noDiscTotalSumNumber = 0;

  const cartItems = Array.from(
    document.querySelectorAll('.full-cart .cart__item')
  );

  console.log(cartItems);

  if (!cartItems.length) {
    let itemPrice = 0;

    let itemCount = 0;

    totalSumNumber += itemCount * itemPrice;

    let noDiscItemPrice = 0;

    noDiscTotalSumNumber += itemCount * noDiscItemPrice;

    document.querySelector(
      '.total__item:first-child p:first-child'
    ).innerHTML = `${cartItems.length} ${morph(cartItems.length)}`;

    document.querySelector('.total__item:first-child p:last-child').innerHTML =
      getNormalizedPrice(noDiscTotalSumNumber, currency);

    document.querySelector(
      '.total__item:nth-child(2) p:last-child'
    ).innerHTML = `-${getNormalizedPrice(
      noDiscTotalSumNumber - totalSumNumber,
      currency
    )}`;
    totalSum.innerHTML = getNormalizedPrice(totalSumNumber, currency);
    totalBtn.innerHTML = `Оплатить ${totalSum.innerHTML}`;
  } else {
    cartItems.forEach((item) => {
      let itemPrice = parseInt(
        item
          .querySelector('.cart__price p:first-child')
          .innerHTML.split('')
          .filter((sym) => sym !== ' ')
          .join('')
      );
      let itemCount = parseInt(item.querySelector('.count__text').innerHTML);

      totalSumNumber += itemCount * itemPrice;

      let noDiscItemPrice = parseInt(
        item
          .querySelector('.cart__price .price-discount')
          .innerHTML.split('')
          .filter((sym) => sym !== ' ')
          .join('')
      );

      noDiscTotalSumNumber += itemCount * noDiscItemPrice;

      document.querySelector(
        '.total__item:first-child p:first-child'
      ).innerHTML = `${cartItems.length} ${morph(cartItems.length)}`;

      document.querySelector(
        '.total__item:first-child p:last-child'
      ).innerHTML = getNormalizedPrice(noDiscTotalSumNumber, currency);

      document.querySelector(
        '.total__item:nth-child(2) p:last-child'
      ).innerHTML = `-${getNormalizedPrice(
        noDiscTotalSumNumber - totalSumNumber,
        currency
      )}`;
      totalSum.innerHTML = getNormalizedPrice(totalSumNumber, currency);
      totalBtn.innerHTML = `Оплатить ${totalSum.innerHTML}`;
    });
  }
}

function getNormalizedPrice(sum, currency) {
  return `${String(sum)
    .split('')
    .reverse()
    .map((digit, idx) => ((idx + 1) % 3 === 0 ? ' ' + digit : digit))
    .reverse()
    .join('')} ${currency}`;
}

document.querySelector('.full-cart').addEventListener('click', (e) => {
  const target = e.target.closest('.del');
  if (target) {
    target.closest('.cart__item').remove();
    renderTotal();
  }
});

countPluses.forEach((countPlus) => {
  countPlus.addEventListener('click', () => {
    if (!Number(countPlus.previousElementSibling.innerHTML)) {
      countPlus.previousElementSibling.previousElementSibling.disabled = false;
    }

    countPlus.previousElementSibling.innerHTML =
      Number(countPlus.previousElementSibling.innerHTML) + 1;
    renderTotal();
  });
});

countMinuses.forEach((countMinus) => {
  countMinus.addEventListener('click', () => {
    if (Number(countMinus.nextElementSibling.innerHTML) >= 1) {
      if (Number(countMinus.nextElementSibling.innerHTML) === 1) {
        countMinus.disabled = true;
      }

      countMinus.nextElementSibling.innerHTML =
        Number(countMinus.nextElementSibling.innerHTML) - 1;
      renderTotal();
    }
  });
});
