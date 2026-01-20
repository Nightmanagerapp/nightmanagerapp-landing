document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  function handleForm(formId, statusId) {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        status.textContent = '¡Gracias por unirte!';
        form.reset();
      });
    }
  }
  handleForm('waitlistForm','waitlistStatus');
  handleForm('waitlistForm2','waitlistStatus2');
});
