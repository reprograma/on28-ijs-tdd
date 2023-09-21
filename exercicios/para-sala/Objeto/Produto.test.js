const Produto = require('./Produto')


describe('Produto', () => {

    //adicionar ao estoque,

    let empada
    beforeEach(() => {
        empada = new Produto("Empada", 7, 25)
    })

    test('Validar adição ao estoque', () => {
        expect(empada.adicionarAoEstoque(2)).toEqual(27)
    })

    // consulta de estoque,
    
    test('Valida consusltas ao estoque', () => {
        expect(empada.consultarEstoque ()).toEqual(25)
        //console.log(empada)
    })

    // remover do estoque quando há estoque suficiente
    test('remover do estoque quando há estoque suficiente', () => {
        expect(empada.removerDoEstoque(10)).toEqual(15)
    })

    // remover do estoque quando  NÃO há estoque suficiente
    test('remover do estoque quando NÃO há estoque suficiente', () => {
        expect(empada.removerDoEstoque(100)).toThrowError() // QUAL SERIA O MELHOR MÉTODO PARA GERAR ERRO ?
    }) 


})