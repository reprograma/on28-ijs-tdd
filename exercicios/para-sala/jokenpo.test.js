const jokenpo = require ('./jokenpo')

describe("Função jokenpo", () => {

    test("Validar empate",() => {
        expect(jokenpo("pedra", "pedra")).toEqual("Empate!")
        expect(jokenpo("tesoura","tesoura")).toEqual("Empate!")
    });


    test("Validar se o jogador 1 venceu",() => {
        expect(jokenpo("pedra","tesoura")).toEqual("Jogador 1 venceu!")
        
    });

    test("Validar se o jogador 2 venceu",() => {
        expect(jokenpo("papel","tesoura")).toEqual("Jogador 2 venceu!")
     });


});