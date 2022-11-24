const hoverFreeElems = Array.from(document.querySelectorAll('.hover-free'));

const hoverWbElems = Array.from(document.querySelectorAll('.wb-icon'));
const hoverMegaElems = Array.from(document.querySelectorAll('.mega-icon'));

const hoverPriceElems = Array.from(
  document.querySelectorAll('.price-discount')
);

hoverFreeElems.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    const info = document.createElement('div');
    info.className = 'hint-info';
    info.innerHTML =
      'Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно';
    info.style.top = `${elem.parentElement.offsetHeight}px`;

    elem.parentElement.style.position = 'relative';
    elem.parentElement.append(info);
  });

  elem.addEventListener('mouseout', () => {
    elem.parentElement.querySelector('.hint-info').remove();
  });
});
hoverMegaElems.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    const info = document.createElement('div');
    info.className = 'hint-info';
    info.innerHTML =
      '<p>ОГРН: 5167746237148</p><p>129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</p>';
    info.style.top = `${elem.parentElement.offsetHeight}px`;

    elem.parentElement.style.position = 'relative';
    elem.parentElement.append(info);

    elem.addEventListener('mouseout', () => {
      elem.parentElement.querySelector('.hint-info').remove();
    });
  });
});

hoverWbElems.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    const info = document.createElement('div');
    info.className = 'hint-info';
    info.innerHTML =
      '<p>ОГРН: 1067746062449</p><p>142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1</p>';
    info.style.top = `${elem.parentElement.offsetHeight}px`;

    elem.parentElement.style.position = 'relative';
    elem.parentElement.append(info);
  });

  elem.addEventListener('mouseout', () => {
    elem.parentElement.querySelector('.hint-info').remove();
  });
});

hoverPriceElems.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    const price = document.createElement('div');
    price.innerHTML = `<p><span>Скидка 55%&nbsp;</span><span>-300 сом</span></p><p><span>Скидка покупателя 10%&nbsp;</span><span>-30 сом</span></p>`;
    price.classList.add('hint-info');
    price.classList.add('price-hint');
    elem.parentElement.style.position = 'relative';
    price.style.top = `${elem.parentElement.offsetHeight}px`;
    price.style.right = `0px`;

    elem.parentElement.append(price);
  });

  elem.addEventListener('mouseout', () => {
    elem.parentElement.querySelector('.hint-info').remove();
  });
});
