import userController from '../controller/UserController';
import { getlocalStorage } from '../helpers/utils.js';

export default class RenderList {
  constructor() {
    this.userList = new userController();
  }
  async render() {
    let template = '';
    const userListEl = document.querySelector('.user-section-list');
    const getUserLocals = getlocalStorage();
    const userList = !getUserLocals ? await this.userList.get() : getUserLocals;
    if (userListEl != null && userList != null) {
      userListEl.innerHTML = '';
      userList.forEach((el) => {
        const listItem = document.createElement('li');
        listItem.classList.add('user-section-list_item');
        listItem.setAttribute('id', el.id ? el.id : el.cpf);
        template = `<div class="user-section-list_item__persona">
                      <span class="user-section-list_item__persona_name" id="user-name">
                        <strong>Nome:</strong>
                        <em class="user_name_item">${el.name}</em>
                      </span>
                      <span class="user-section-list_item__persona_cpf" id="user-cpf">
                        <strong>CPF:</strong>
                        <em class="user_cpf_item">${el.cpf}</em>
                      </span>
                    </div>
                    <div class="user-section-list_item__info">
                      <span class="user-section-list_item__email" id="user-email">
                        <strong>E-mail:</strong>
                        <em class="user_email_item">${el.email}</em>
                      </span>
                      <span class="user-section-list_item__phone" id="user-phone">
                        <strong>Tel:</strong>
                        <em class="user_phone_item">${el.phone}</em>
                      </span>
                    </div>
                    <div class="user-section-list_item__actions">
                      <button id="edit-btn" type="button" class="action-btn edit" data-id=${
                        el.id ? el.id : el.cpf
                      } id="edit">Edit</button>
                      <button id="delete-btn" type="button" class="action-btn delete" data-id=${
                        el.id ? el.id : el.cpf
                      }>Delete</button>
                    </div>`;
        listItem.innerHTML = template;
        userListEl.appendChild(listItem);
      });
    }
  }
}
