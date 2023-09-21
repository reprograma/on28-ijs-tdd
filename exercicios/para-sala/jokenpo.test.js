const jokenpo = require("./jokenpo")

describe("Função jokenpo", () =>{
    // casos de testes

    test('Validar empate', () => {
        expect(jokenpo("pedra", "pedra")).toEqual("Empate!")
        expect(jokenpo("tesoura", "tesoura")).toEqual("Empate!")
    });

    // checar se o jogador 1 ganhou


    test('Validar ganador 1', () => {
        expect(jokenpo("pedra", "tesoura")).toEqual("Jogador 1 venceu!")
        expect(jokenpo("tesoura", "papel")).toEqual("Jogador 1 venceu!")
        expect(jokenpo("papel", "pedra")).toEqual("Jogador 1 venceu!")

    });

    test('Validar ganador 2', () => {
        expect(jokenpo("pedra", "papel")).toEqual("Jogador 2 venceu!")
        expect(jokenpo("tesoura", "pedra")).toEqual("Jogador 2 venceu!")
        expect(jokenpo("papel", "tesoura")).toEqual("Jogador 2 venceu!")

    })

})