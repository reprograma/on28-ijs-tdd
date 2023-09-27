const calcularBoletim = require('./calcularBoletim')

test('aluno com nota 9 não deve ser reprovado', () => {
    expect(calcularBoletim(9)).not.toBe('reprovado'); 
});