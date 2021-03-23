import validationController from './FormController.js';
import {
  getlocalStorage,
  setLocalStorage,
  returnToHome
} from '../helpers/utils.js';

export default class UserController {
  constructor() {
    this.id;
    this.name;
    this.email;
    this.cpf;
    this.phone;
    this.lastId;
    this.formId;
    this.users = getlocalStorage();
  }

  set(name, email, cpf, phone) {
    let users = [];
    let newUser = {};
    const validateFields = new validationController();
    if (this.users) users = this.users;

    this.id = this.lastId++;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.phone = phone;
    this.formId = document.querySelector('form').getAttribute('data-id');

    if (!this.formId) {
      newUser = {
        id: this.id,
        name: this.name,
        cpf: this.cpf,
        phone: this.phone,
        email: this.email
      };

      if (!validateFields.validateFields()) {
        users.push(newUser);
        setLocalStorage(users);
      }
    } else {
      this.edit(this.formId, name, email, cpf, phone);
    }
    returnToHome();
  }
  delete(itemId) {
    const userList = this.users;
    for (var i = 0; i < userList.length; i++) {
      if (parseInt(itemId) == userList[i].id) {
        userList.splice(i, 1);
      }
    }
    setLocalStorage(userList);
  }
  edit(itemId, name, email, cpf, phone) {
    const userList = getlocalStorage('users');
    for (let i = 0; i < userList.length; i++) {
      if (parseInt(itemId) == userList[i].id) {
        userList[i] = {
          id: userList[i].id,
          name: name,
          cpf: cpf,
          phone: phone,
          email: email
        };
      }
    }

    setLocalStorage(userList);
    returnToHome();
  }
  async get() {
    let userList = [];
    const response = await fetch(
      'https://private-21e8de-rafaellucio.apiary-mock.com/users'
    );
    if (response.status != 200) {
      return userList;
    }
    userList = await response.json();
    setLocalStorage(userList);
    const userListEl = document.getElementById('user-section-list');
    if (userList != null && userList.length > 0) {
      return userList;
    }
  }
}
