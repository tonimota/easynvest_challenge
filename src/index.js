import userController from './controller/UserController.js';
import eventController from './controller/EventsController.js';
import formController from './controller/FormController.js';
import Mask from './core/mask';
import renderList from './view/index.js';
import '../src/assets/style/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = () => {
  const view = new renderList();
  const formView = new formController();
  const eventHandler = new eventController();
  const mask = new Mask();
  eventHandler.submitForm();
  eventHandler.deleteUser();
  eventHandler.editUser();
  eventHandler.inputBlur();
  mask.inputMask();
  view.render();
};
