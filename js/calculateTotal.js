const totalBtn = document.querySelector('.total__btn');
const totalSum = document.querySelector('.total__sum');
const totalCheckbox = document.querySelector(
  '.total__hint input[type="checkbox"]'
);

totalBtn.innerHTML = `Оплатить ${totalSum.innerHTML}`;
totalCheckbox.addEventListener('change', (e) => {
  if (totalCheckbox.checked) {
    totalBtn.innerHTML += ' сразу';
  } else {
    totalBtn.innerHTML = `Оплатить ${totalSum.innerHTML}`;
  }
});
