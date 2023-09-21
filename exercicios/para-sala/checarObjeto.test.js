const { allKeys, isObject } = require('./checarObjeto');

describe("Checar objeto", () => {

    const loja = {
        nome: 'Daka',
        endereco: 'Venezuela'
    }
    const lojaArray = ['nome', 'endereco']
    
    // se o parametro não for um objeto retornar []
    test('Verifica se o dado recibido é um objeto', () => {
        expect(allKeys("daka")).toEqual([])
    })

    // se estamos retornando as chaves
    test('Verificar se estamos retornando as chaves', () => { 
        expect(allKeys(loja)).toEqual(lojaArray)
    })

    // se o parámetro é um objeto
    test('Verifica se ó parámetro é um objeto', () => {
        expect(isObject(loja)).toEqual(true)
    })
})




