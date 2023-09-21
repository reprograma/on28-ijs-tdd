const ContaDoBanco = require('./resolucao')

test('saldo inicial e limite devem ser iguais', () => {
  const conta = new ContaDoBanco('Maria Joaquina ', 1000, 500);
  expect(conta.consultaSaldo()).toBe(1000);
});

test('deposito deve aumentar saldo', () => {
  const conta = new ContaDoBanco('Maria Joaquina', 1000, 500);
  conta.deposito(200);
  expect(conta.consultaSaldo()).toBe(1200);
});

test('saque deve diminuir saldo', () => {
  const conta = new ContaDoBanco('Maria Joaquina ', 1000, 500);
  conta.sacar(200);
  expect(conta.consultaSaldo()).toBe(800);
});

test('saque com limite de cheque especial deve  usar limite', () => {
  const conta = new ContaDoBanco('Maria Joaquina', 1000, 300)
expect(conta.sacar(700)).toEqual(300);
});

test('saque com fundos insuficientes deve gerar erro', () => {
  const conta = new ContaDoBanco('Maria Joaquina ', 500, 500);
  expect(() => conta.sacar(2000)).toThrow('Saldo insuficiente!');
});

test('consulta do sasldo, consulta do saldo nao deve ser nula',() =>{
  const conta = new ContaDoBanco('Maria Joaquina', 1000, 500);
  expect(conta.consultaSaldo()).not.toBe(null)
})

test('desativar conta deve evitar futuras operações', () => {
  const conta = new ContaDoBanco('Maria Joaquina ', 1000, 500);
  conta.desativarConta();
  expect(() => conta.sacar(200)).toThrow('Conta está inativa!');
  expect(() => conta.deposito(200)).toThrow('Conta está inativa!')
});
