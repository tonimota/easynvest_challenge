import '../src/assets/style/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index');
  let x = document.querySelector('h1');
  x.innerHTML = 'Olá mundo';
});

console.log('teste');
