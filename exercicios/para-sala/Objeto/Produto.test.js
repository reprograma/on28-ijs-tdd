const Produto = require('./Produto')

describe("Produto", () => {

    //adicionar ao estoque

    let empada
    beforeEach(() => {//
        empada = new Produto("Empada", 7, 25);
});

test("validar adição ao estoque", () => {
    expect(empada.adicionarAoEstoque(2)).toEqual(27)
});

});

//consulta de estoque

// remover do estoque quando há estoque suficiente

//remover do estoque quando não há estoque suficiente


