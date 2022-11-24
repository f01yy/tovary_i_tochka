const modals = Array.from(document.querySelectorAll('.modal'));
const modalBodies = Array.from(document.querySelectorAll('.modal__body'));
const modalCloses = Arra.from(document.querySelectorAll('.modal__close'));

for (let modalBody of modalBodies) {
  modalBody.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

for (let modal of modals) {
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

for (let modalClose of modalCloses) {
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
