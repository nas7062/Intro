document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalPopups = document.querySelectorAll('.modal_popup');

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal_btn')) {
      const targetModal = event.target.dataset.modal;
      console.dir(targetModal);
      modal.style.display = 'block';
      document.querySelector(`.modal_popup.${targetModal}`).style.display = 'block';
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close_btn')) {
      modal.style.display = 'none';
      modalPopups.forEach((popup) => (popup.style.display = 'none'));
    }
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalPopups.forEach((popup) => (popup.style.display = 'none'));
    }
  });
});
const cursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});