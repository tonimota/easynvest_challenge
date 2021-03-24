import { createId } from '../src/helpers/utils.js';
import { expect } from 'chai';

describe('Helpers', () => {
  describe('CreateId', (done) => {
    const data = [
      {
        cpf: '77797584192',
        email: 'myemail2@test.com.br',
        name: 'My name 2',
        phone: '11987654321'
      }
    ];
    it('Deve retornar o objeto com o ID', () => {
      expect(createId(data)[0]).to.have.property('id');
    });
    it('Deve retornar um array vazio', () => {
      expect(createId([])).to.be.empty;
    });
    it('Validar tipo de dado retornado "array" ', () => {
      expect(createId(data)).to.be.an('array');
    });
    it('Validar a primeira posição do array retornado', () => {
      expect(createId(data)[0]).to.be.an('object');
    });
  });
});
