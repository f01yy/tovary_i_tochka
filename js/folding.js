const arrow = document.querySelector('.cart__btn');
const notAvailableArrow = document.querySelector('.not-available .cart__btn');
const fullCartList = document.querySelector('.full-cart .cart__list');
const fullCart = document.querySelector('.cart.full-cart');
const fullCartHeader = document.querySelector('.cart__header > div');
const totalSum = document.querySelector('.total__sum');
let fullCartHeaderHTML = '';

const notAvailableCartList = document.querySelector(
  '.not-available .cart__list'
);

arrow.addEventListener('click', () => {
  arrow.classList.toggle('cart__btn-folded');

  if (fullCartList.style.display === 'none') {
    fullCartList.style.display = 'flex';
    fullCartHeader.innerHTML = fullCartHeaderHTML;
  } else {
    fullCartList.style.display = 'none';
    const fullCartListLength = Array.from(
      fullCartList.querySelectorAll('.cart__item')
    ).length;

    fullCartHeaderHTML = fullCartHeader.innerHTML;
    fullCartHeader.innerHTML = `<p class="cart__header-folded">${fullCartListLength} ${morph(
      fullCartListLength
    )} · ${totalSum.innerHTML}</p>`;
  }
});

function morph(int, array) {
  return (
    (array = array || ['товар', 'товара', 'товаров']) &&
    array[
      int % 100 > 4 && int % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
    ]
  );
}

notAvailableArrow.addEventListener('click', () => {
  notAvailableArrow.classList.toggle('cart__btn-folded');

  notAvailableCartList.style.display =
    notAvailableCartList.style.display === 'none' ? 'flex' : 'none';
});
