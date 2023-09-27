const Produto = require('./produto')

describe("Produto", () => {
    let tenis

    beforeEach(() => {
        tenis = new Produto("Tenis", 150, false) // nome, preco, freteGratis (bool)
    }) 

    test('opção de frete grátis não ativada', () => {
        expect(tenis.hasFreteGratis()).toBeFalsy()
    })
})

