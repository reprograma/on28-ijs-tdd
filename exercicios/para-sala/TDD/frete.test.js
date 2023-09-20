const Produto =  require('./frete')

describe("Produto", () => {
    let tenis

    beforeEach(() => {
        tenis = new Produto("Tenis", 150, false)
    }) 

    test('opção de frete grátis não ativada', () => {
        expect(tenis.hasFreteGratis()).toBeFalsy()
    })
    
})