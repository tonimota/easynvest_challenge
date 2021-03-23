import cpfValidate from '../helpers/cpfvalidate.js';
import formValidate from '../helpers/validators.js';

export default class FormController {
  constructor() {
    this.nameField = document.getElementById('name');
    this.emailField = document.getElementById('email');
    this.cpfField = document.getElementById('cpf');
    this.phoneField = document.getElementById('phone');
    this.errorMessage = null;
    this.error = false;
  }

  validateFillFields() {
    let inputs = document.querySelectorAll('.user_data');
    let count = 0;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length > 0) {
        count++;
      }
    }

    if (count == inputs.length) {
      return true;
    } else {
      return false;
    }
  }
  validErrorField() {
    let errors = document.querySelectorAll('.error-message');
    let error = false;
    errors.forEach((element) => {
      if (element.innerText != '') {
        error = true;
      }
    });
    return error;
  }
  validateFields(e) {
    const validateForm = new formValidate();
    if (!validateForm.validateName(this.nameField.value)) {
      this.nameField.classList.add('error');
      this.errorMessage = 'Campo deve conter 3 caracteres ou mais';
      document.getElementById('name-error').innerText = this.errorMessage;
    } else {
      this.nameField.classList.remove('error');
      document.getElementById('name-error').innerText = '';
    }
    if (!validateForm.validateCpf(this.cpfField.value)) {
      this.cpfField.classList.add('error');
      this.errorMessage = 'Este CPF não é válido';
      document.getElementById('cpf-error').innerText = this.errorMessage;
    } else {
      this.cpfField.classList.remove('error');
      document.getElementById('cpf-error').innerText = '';
    }
    if (!validateForm.validateEmail(this.emailField.value)) {
      this.emailField.classList.add('error');
      this.errorMessage = 'Este Email não é válido';
      document.getElementById('email-error').innerText = this.errorMessage;
    } else {
      this.emailField.classList.remove('error');
      document.getElementById('email-error').innerText = '';
    }
    if (!validateForm.validatePhone(this.phoneField.value)) {
      this.phoneField.classList.add('error');
      this.errorMessage = 'Este Telefone não é válido';
      document.getElementById('phone-error').innerText = this.errorMessage;
    } else {
      this.phoneField.classList.remove('error');
      document.getElementById('phone-error').innerText = '';
    }
    return this.validErrorField();
  }
}
