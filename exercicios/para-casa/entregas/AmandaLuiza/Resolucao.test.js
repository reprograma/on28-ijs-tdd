const Resolucao = require('./Resolucao')

describe("Resolucao", () => {
    // adicionar ao saldo, 

    let resolucao

    beforeEach(() => {
        resolucao = new Resolucao(7, 25)
    })

    test("validar Resolucao", () => {
        expect(resolucao.adicionarAoSaldo(2)).toEqual(27)
    })
    
    //consulta de saldo,
    test("consultar saldo", () => {
        expect(resolucao.consultarSaldo()).toEqual(25)
    })
    
    
    //remover do saldo quando não há saldo suficiente
    test("remover do saldo quando não há saldo suficiente", () => {
        expect(resolucao.removerDoSaldo(10)).toEqual(15)
    })

//     //remover do estoque quando NÃO há estoque suficiente
//     test("remover do estoque quando NÃO há estoque suficiente", () => {
//         // expect(empada.removerDoEstoque(100)).toThrowError('Estoque insuficiente') //qual seria o melhor método para gerar erro?
//         expect(() => {empada.removerDoEstoque(100);}).toThrow();
//     })

 })