const jokenpo = require('./jokenpo')

describe("Função jokenpo", () => {
    // casos de teste

    test("Validar empate", () => {
        expect(jokenpo("pedra", "pedra")).toEqual("Empate!")
        expect(jokenpo("tesoura", "tesoura")).toEqual("Empate!")
    })

    test("checar se o jogador 2 ganhou", () => {
        const output = "Jogador 2 venceu!";

        expect(jokenpo('pedra', 'papel')).toEqual(output)
        expect(jokenpo('papel', 'tesoura')).toEqual(output)
        expect(jokenpo('tesoura', 'pedra')).toEqual(output)
    })

    test("checar se o jogador 1 ganhou", () => {
        const output = "Jogador 1 venceu!";

        expect(jokenpo('pedra', 'tesoura')).toEqual(output)
        expect(jokenpo('papel', 'pedra')).toEqual(output)
        expect(jokenpo('tesoura', 'papel')).toEqual(output)


    })

    //checar se o jogador 1 ganhou
    
})