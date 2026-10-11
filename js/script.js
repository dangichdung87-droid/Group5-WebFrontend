document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const alertBox = document.getElementById('formAlert');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        alertBox.className = 'alert alert-danger mt-3';
        alertBox.textContent = 'Please fill in all required fields.';
        alertBox.classList.remove('d-none');
        return;
      }

      alertBox.className = 'alert alert-success mt-3';
      alertBox.textContent = 'Thank you! Your message has been sent successfully.';
      alertBox.classList.remove('d-none');

      contactForm.reset();
    });
  }
});

// Ngăn chặn thao tác chạm 2 ngón tay kéo sang ngang (Touchpad/Trackpad horizontal swipe) làm trang web bị xê dịch
window.addEventListener(
  'wheel',
  function (e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      let target = e.target;
      let hasHorizontalScroll = false;
      while (target && target !== document.body && target !== document.documentElement) {
        const overflowX = window.getComputedStyle(target).overflowX;
        if (
          (overflowX === 'auto' || overflowX === 'scroll') &&
          target.scrollWidth > target.clientWidth
        ) {
          hasHorizontalScroll = true;
          break;
        }
        target = target.parentElement;
      }

      if (!hasHorizontalScroll) {
        e.preventDefault();
      }
    }
  },
  { passive: false }
);