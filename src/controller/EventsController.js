import userController from './UserController.js';
import formController from './FormController.js';
import { getlocalStorage } from '../helpers/utils.js';

export default class EventController {
  constructor() {
    this.user = new userController();
    this.form = new formController();
    this.nameField = document.getElementById('name');
    this.emailField = document.getElementById('email');
    this.cpfField = document.getElementById('cpf');
    this.phoneField = document.getElementById('phone');
  }
  submitForm() {
    const form = document.getElementById('user-form');
    const button = document.getElementById('send');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.loadButtonAnimate();
      if (button.classList.value.indexOf('disabled') == -1) {
        this.user.set(
          this.nameField.value,
          this.emailField.value,
          this.cpfField.value,
          this.phoneField.value
        );
      }
    });
  }
  deleteUser() {
    const btnDelete = document.querySelector('.user-section-list');
    let currentEl = null;
    let listItem = null;
    if (btnDelete != null) {
      btnDelete.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('delete')) {
          currentEl = e.target;
          listItem = document
            .getElementById(currentEl.getAttribute('data-id'))
            .remove();
          this.user.delete(currentEl.getAttribute('data-id'));
        }
      });
    }
  }
  editUser() {
    const btnEdit = document.querySelector('.user-section-list');
    if (btnEdit != null) {
      btnEdit.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('class'));
        if (e.target.getAttribute('class') === 'action-btn edit') {
          e.preventDefault();
          let id = e.target.getAttribute('data-id');
          document.querySelector('form').setAttribute('data-id', id);
          this.nameField.value = document
            .getElementById(id)
            .querySelector('.user_name_item').innerText;
          this.emailField.value = document
            .getElementById(id)
            .querySelector('.user_email_item').innerText;
          this.cpfField.value = document
            .getElementById(id)
            .querySelector('.user_cpf_item').innerText;
          this.phoneField.value = document
            .getElementById(id)
            .querySelector('.user_phone_item').innerText;
        }
      });
    }
  }
  inputBlur() {
    let inputs = document.querySelectorAll('.user_data');
    let button = document.getElementById('send');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('blur', (e) => {
        if (this.form.validateFillFields()) {
          if (!this.form.validateFields()) {
            button.classList.remove('disabled');
          } else {
            button.classList.add('disabled');
          }
        } else {
          button.classList.add('disabled');
        }
      });
    }
  }
  loadButtonAnimate() {
    const btnSubmit = document.getElementById('send');
    const loader = document.getElementById('loader');
    btnSubmit.classList.add('loader-btn');
    loader.style.display = 'block';
    setTimeout(() => {
      loader.style.display = 'none';
      window.location.href = '/';
    }, 2000);
  }
}
