const checkEvenNumber = require('./numeroPar')
describe("Validando função  de número par", () => {
    test("Verificar se é um número par", () => {
        expect(checkEvenNumber(2)).toEqual("2 é um número par")
    })
    
    test("Verificar se é um número ímpar", () => {
        expect(checkEvenNumber(3)).toEqual("3 é um número ímpar")
    })
    
    test("Verificar se não é um número", () => {
        expect(checkEvenNumber("goiaba")).toEqual("goiaba não é um número")
    })
})

