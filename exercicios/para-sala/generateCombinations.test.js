const generateCombinations = require('./generateCombinations')

describe('Verifica função generateCombinations', () => {

    const combinations = [
        's',   'o', 
        'so',  'l', 
        'sl',  'ol',
        'sol'   
    ]

    test('Checar array vazio quando passar string vazio', () => {
        expect(generateCombinations('')).toEqual([]);
    })

    test('Checar um array com N combinação da palavra Sol', () => {
        expect(generateCombinations('sol')).toHaveLength(7);
    })

    test('Checar as combinações por array/mock', () => {
        expect(generateCombinations('sol')).toEqual(combinations)
    })
})