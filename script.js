const form = document.querySelector('form');
const result = document.getElementById('result');
const fields = form.querySelectorAll('input, textarea, select');
const customFeedback = form.hasAttribute('data-feedback');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
let submitted = false;

function checkPasswords() {
  if (confirmPassword) {
    confirmPassword.setCustomValidity(
      confirmPassword.value && confirmPassword.value !== password.value
        ? 'Passwords must match.' : ''
    );
  }
}

function showFeedback() {
  checkPasswords();
  fields.forEach(function (field) {
    if (field.type === 'checkbox') return;
    const valid = field.validity.valid;
    field.classList.toggle('is-valid', valid);
    field.classList.toggle('is-invalid', !valid);
    field.setAttribute('aria-invalid', String(!valid));
    const error = document.getElementById(field.id + '-error');
    if (error && !valid) {
      if (field.validity.valueMissing) error.textContent = 'This field is required.';
      else if (field.validity.typeMismatch) error.textContent = 'Enter a valid email.';
      else if (field.validity.tooShort) error.textContent = 'Use at least ' + field.minLength + ' characters.';
      else error.textContent = field.validationMessage;
    }
  });
  const gender = form.querySelector('input[name="gender"]');
  if (gender) {
    document.getElementById('gender-error').classList.toggle('d-block', !gender.validity.valid);
    document.getElementById('gender-ok').classList.toggle('d-block', gender.validity.valid);
  }
}

form.addEventListener('submit', function (event) {
  // This is a frontend demo.
  event.preventDefault();
  submitted = true;
  result.textContent = '';
  if (customFeedback) showFeedback();
  if (!form.checkValidity()) {
    form.querySelector(':invalid').focus();
    return;
  }
  result.textContent = 'Form is valid. Demo only: no data was sent.';
});

form.addEventListener('input', function () {
  result.textContent = '';
  checkPasswords();
  if (customFeedback && submitted) showFeedback();
});

form.addEventListener('reset', function () {
  // Clear messages and colors.
  submitted = false;
  result.textContent = '';
  fields.forEach(function (field) {
    field.classList.remove('is-valid', 'is-invalid');
    field.removeAttribute('aria-invalid');
    field.setCustomValidity('');
  });
  form.querySelectorAll('.d-block').forEach(function (message) {
    message.classList.remove('d-block');
  });
});
