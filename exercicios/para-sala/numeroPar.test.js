const checkEvenNumber = require ('./numeroPar')

describe("Validando função de número par",() =>{
test ("Verificar se é um número par", () =>{
    expect( checkEvenNumber(2)).toEqual("2 é um número par");
})

test("Verificar se é um número ímpar",()=> {
    expect( checkEvenNumber(5)).toEqual("5 é um número ímpar");
})

test("Verificar se não é um número", () => {
    expect(checkEvenNumber("Sabrina")).toEqual("Sabrina não é um número");
})

})