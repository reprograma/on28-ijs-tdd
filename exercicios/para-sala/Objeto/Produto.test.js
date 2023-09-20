const Produto = require('./Produto')

describe("Produto", () => {
    let empada

    beforeEach(() => {
        empada = new Produto("Empada", 7, 25)
    })

    // adicionar ao estoque
    test("validar adição ao estoque ocorre corretamente", () => {
        expect(empada.adicionarAoEstoque(2)).toEqual(27)
    })
    
    // consultar de estoque
    test("consultar estoque", () => {
        expect(empada.consultarEstoque()).toEqual(25)
    })
        
    // remover do estoque quando há estoque suficiente
    test("remover do estoque quando há estoque suficiente", () => {
        expect(empada.removerDoEstoque(10)).toEqual(15)
    })

    // remover do estoque quando NÃO há estoque suficiente
    test("remover do estoque quando NÃO há estoque suficiente", () => {
        // expect(empada.removerDoEstoque(100)).toThrowError('Estoque insuficiente') //qual seria o melhor método para gerar erro?
        // expect(() => {empada.removerDoEstoque(100);}).toThrow('Estoque insuficiente');

        function gerarErroEstoque(){
            empada.removerDoEstoque(100)
        }
        
        expect(gerarErroEstoque).toThrow('Estoque insuficiente');
    })
})