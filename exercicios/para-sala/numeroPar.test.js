const checkEvenNumber = require('./numeroPar')

describe("Validando função de número par", () => {
    test("Verificar se é um número par", () => {
        expect(checkEvenNumber(2)).toEqual("2 é um número par")
    })

    test("Verificar se um número é ímpar", () => {
        expect(checkEvenNumber(9)).toEqual("9 é um número ímpar")
    })

    test("Verificar se não é um número", () => {
        expect(checkEvenNumber("batata")).toEqual("batata não é um número")
    })
})




