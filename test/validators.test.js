import Validators from '../src/helpers/validators';
import assert from 'assert';

const validators = new Validators();

describe('Validators', () => {
  describe('CPF (com e sem mask)', (done) => {
    it('Deve retornar true se o cpf for válido', () => {
      assert.equal(validators.validateCpf('189.638.820-55'), true);
      assert.equal(validators.validateCpf('18963882055'), true);
    });

    it('Deve retornar false se o cpf não for válido', () => {
      assert.equal(validators.validateCpf('11111111111'), false);
      assert.equal(validators.validateCpf('111.111.111-11'), false);
      assert.equal(validators.validateCpf('111.xxx.111-11'), false);
    });

    it('Deve retornar false se o cpf conter letras', () => {
      assert.equal(validators.validateCpf('xxx.xxx.xxx-xx'), false);
      assert.equal(validators.validateCpf('xxxxxxxxxxx'), false);
    });

    it('Deve retornar false se NAO receber uma entrada para cpf', () => {
      assert.equal(validators.validateCpf(''), false);
    });
  });
});

describe('Email', () => {
  it('Deve retornar true ao receber uma entrada de email valido', () => {
    assert.equal(validators.validateEmail('teste@teste.com'), true);
  });
  it('Deve retornar false ao receber uma entrada email invalido', () => {
    assert.equal(validators.validateEmail('am.bruno.com'), false);
    assert.equal(validators.validateEmail('8392174893sajksdsja'), false);
    assert.equal(validators.validateEmail('11111111'), false);
  });
  it('Deve retornar false caso nao receba uma entrada de email', () => {
    assert.equal(validators.validateEmail(''), false);
  });
});

describe('Name', () => {
  it('Deve retornar true se o nome for válido', () => {
    assert.equal(validators.validateName('Breno Lopes'), true);
    assert.equal(validators.validateName('William'), true);
    assert.equal(validators.validateName('Che'), true);
  });

  it('Deve retornar false se o nome for inválido', () => {
    assert.equal(validators.validateName('a'), false);
    assert.equal(validators.validateName('12'), false);
    assert.equal(validators.validateName(''), false);
  });
});

describe('Phone tests', () => {
  it('Deve retornar true se o telefone for válido', () => {
    assert.equal(validators.validatePhone('(11) 99179-0000'), true);
    assert.equal(validators.validatePhone('(11) 4444-1111'), true);
  });

  it('Deve retornar true se o telefone não for válido', () => {
    assert.equal(validators.validatePhone('(11) 91790000'), false);
    assert.equal(validators.validatePhone('(11) 917900000'), false);
    assert.equal(validators.validatePhone('(11)91790000'), false);
    assert.equal(validators.validatePhone('()'), false);
  });

  it('Deve retornar false para Letras ou Caracteres especiais', () => {
    assert.equal(validators.validatePhone('(##) ####-####'), false);
    assert.equal(validators.validatePhone('(XX) XXXXX-XXXX'), false);
  });
});
