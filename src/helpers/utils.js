const setLocalStorage = (data) => {
  let users = createId(data);
  localStorage.setItem('users', JSON.stringify(users));
};

const createId = (data) => {
  let id = 1;
  data.forEach((index) => {
    index.id = id;
    id++;
  });
  return data;
};

const getlocalStorage = () => {
  let users = localStorage.getItem('users');
  if (users) {
    users = JSON.parse(users);
    return users;
  }
  false;
};

const returnToHome = () => {
  window.location.href = '/';
};

export { setLocalStorage, getlocalStorage, returnToHome };
