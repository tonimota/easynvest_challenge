export default class Mask {
  inputMask() {
    document.getElementById('phone').addEventListener('input', function (e) {
      let x = e.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    document.getElementById('cpf').addEventListener('input', function (e) {
      let value = '';
      value = e.target.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
      e.target.value = value;
    });
  }
}
