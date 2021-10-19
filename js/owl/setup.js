$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 7
    }
  }
});

function startModal() {
  const modal = document.getElementById('modal-info');
  modal.classList.add('show');
  modal.addEventListener('click', function (e) {
    if (
      e.target.id === 'modal-info' ||
      e.target.className === 'close-btn' ||
      e.target.id === 'x-modal'
    ) {
      modal.classList.remove('show');
    }
  });
}
