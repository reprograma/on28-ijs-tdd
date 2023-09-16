const { allKeys, isObject, produto, pessoa } = require("./checarObjeto");

describe("Checar objeto", () => {
    // se o parametro não for um objeto retornar []
    test("verificar se não é um objeto", () => {
        expect(allKeys("Noemi")).toEqual([])
    })
    //se estamos retornando as chaves
    test("verificar se estamos retornando as chaves", () => {
        const pessoaArray = ["nome", "sobrenome"]
        expect(allKeys(pessoa)).toEqual(pessoaArray)
    })
    //se o parametro  é um objeto
    test("verifica se o parametro é objeto", () => {
        expect(isObject(pessoa)).toEqual(true)
    })
    
    test("Verifica se o dado recebido é um objeto", () => {
	    expect(allKeys({ chave: "valor" })).toEqual(["chave"]);
});

    test("Verifica se o dado recebido é um objeto e retorna suas chaves", () => {
	    expect(allKeys(produto)).toEqual(["descricao", "preco"]);
});
})






//sugestões ChatGPT (estudar depois)
test("Testa se a entrada é um objeto simples", () => {
    expect(isObject({ key: "value" })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject("string")).toBe(false);
  });
  
  test("Testa se a entrada é uma função", () => {
    const myFunction = () => {};
    expect(isObject(myFunction)).toBe(true);
  });
  
  test("Testa se a entrada é uma instância de uma classe", () => {
    class MyClass {}
    const myInstance = new MyClass();
    expect(isObject(myInstance)).toBe(true);
  });
  
  test("Testa se a entrada é undefined", () => {
    expect(isObject(undefined)).toBe(false);
  });
