const generateCombinations = require('./generateCombinations')

describe("Função de gerar Combinação", () => {
    const combinations = [
        'd',   'i',
        'di',  'a',
        'da',  'ia',
        'dia'
      ]
      
    test("checar as combinações por tamanho", () => {
        expect(generateCombinations("dia")).toHaveLength(7)
    })

    test("checar as combinações por array/mock", () => {
        expect(generateCombinations("dia")).toEqual(combinations)
    })
})