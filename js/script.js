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