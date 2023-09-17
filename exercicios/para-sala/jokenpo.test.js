const jokenpo = require("./jokenpo")
describe("Função jokenpo", () => {
    test("Validar empate", () => {
        expect(jokenpo("pedra", "pedra")).toEqual("Empate!")
        expect(jokenpo("tesoura", "tesoura")).toEqual("Empate!")
        expect(jokenpo("papel", "papel")).toEqual("Empate!")
    })

    test("Validar se jogador 1 venceu", () => {
        expect(jokenpo("papel", "pedra")).toEqual("Jogador 1 venceu!")
        expect(jokenpo("tesoura","papel")).toEqual("Jogador 1 venceu!")
        expect(jokenpo("pedra","tesoura" )).toEqual("Jogador 1 venceu!")
    })

    test("Validar se jogador 2 venceu", () => {
        expect(jokenpo("pedra", "papel")).toEqual("Jogador 2 venceu!")
        expect(jokenpo("papel", "tesoura")).toEqual("Jogador 2 venceu!")
        expect(jokenpo("tesoura", "pedra")).toEqual("Jogador 2 venceu!")
    })

    
})

