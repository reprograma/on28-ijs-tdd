const generateCombinations = require('./generateCombinations')

describe("Gerar combinação", () => {
    const word = "dia"
    const wordCombination = ['d', 'i', 'di', 'a', 'da', 'ia', 'dia']

    test("verificar se gerou uma combinação", () => {
        expect(generateCombinations(word)).toEqual(wordCombination)
    })
    
})



    



