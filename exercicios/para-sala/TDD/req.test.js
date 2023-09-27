const fazerRequisicao = require('./req')

test('resposta da requisição superou o limite de tempo', () => {
    var result = fazerRequisicao();
	expect(result.time).toBeGreaterThan(4000);
});