### Exercício 1
````javascript
test('aluno com nota 9 não deve ser reprovado', () => {
    expect(calcularBoletim(9)).not.toBe('reprovado'); 
});
````

---

### Exercício 2
````javascript
it('caso nenhum id seja passado o resultado deve ser undefined', () => {
    expect(getCompanyById()).toBeUndefined();
});
````

---

### Exercício 3
````javascript
test('listar os itens da tag de apartamento compartilhado', () => {
    const shared = true
    const expectedProps = {
        icon: 'shared',
        color: 'green',
        background: 'gray',
        label: 'Compartilhado',
    }
    
    expect(buildApartamentTags(shared)).not.toBeUndefined()
    expect(buildApartamentTags(shared)).toMatchObject(expectedProps)
});
````

---

### Exercício 4
````javascript
describe("Produto", () => {
    let tenis

    beforeEach(() => {
        tenis = new Produto("Tenis", 150, false) // nome, preco, freteGratis (bool)
    }) 

    test('opção de frete grátis não ativada', () => {
        expect(tenis.hasFreteGratis()).toBeFalsy()
    })
    
})
````

---

### Exercício 5
````javascript
test('resposta da requisição superou o limite de tempo', () => {
    var result = fazerRequisicao();
	expect(result.time).toBeGreaterThan(4000); // setTimeout
});
````