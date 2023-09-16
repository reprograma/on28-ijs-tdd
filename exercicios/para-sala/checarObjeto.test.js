const { allKeys, isObject } = require('./checarObjeto')

describe("checar objeto", () => {
    const pessoa = {
        nome: 'Isabelle',
        sobrenome: 'Galvão'
    }
    const pessoaArray = ['nome', 'sobrenome']

    // se o parametro não for um objeto retornar []
    test("verificar se não é um objeto", () => {
        expect(allKeys("Isabelle")).toEqual([])
    })
    
    // se estamos retornando as chaves
    test("verifar se estamos retornando as chaves", () => {
        expect(allKeys(pessoa)).toEqual(pessoaArray)
    })

    // se o parametro é um objeto
    test("verifica se o paremetro é um objeto", () => {
        expect(isObject(pessoa)).toEqual(true)
    })

})