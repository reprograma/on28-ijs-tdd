const { allKeys, isObject } = require ('./checarObjeto')

describe('Função allKeys', () => {
    test("Verificar se não é um objeto",() => {
        expect(allKeys({})).toEqual([]);

    });

    test("Verificar se retorna as chaves de um objeto ",() => {
        const viajar = {
            praia: "true",
            campo: "false",        
        };
        expect(allKeys(viajar)).toEqual(["praia", "campo"])
    });

    test("Verificar se retorna um array vazio para um valor não-objeto", () =>{
        expect(allKeys('Não é um objeto')).toEqual([]);
    });

});

describe('Função isObject', () => {  
    test('Verificar se retorna true para um objeto', () => {
    const exercitar = {
       caminhar: 'true',
    };
    expect(isObject(exercitar)).toEqual(caminhar);
  });

  test('deve retornar true para uma função', () => {
    const func = () => {};
    expect(isObject(func)).toEqual(true);
  });

 test('Verificar se retorna false para um valor não-objeto', () => {
    expect(isObject('Não é um objeto')).toEqual(false);
  });

});