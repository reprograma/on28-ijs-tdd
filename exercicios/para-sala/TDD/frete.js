// Produto -  nome, preço, estoque
// consultar o estoque, adicionar ao estoque, remover do estoque
// Caso voce mais itens do que tem no estoque - resulta em erro

// adicionar ao estoque, consulta de estoque, remover do estoque

class Produto{
    constructor(nome, preco, freteGratis){
        this.nome = nome;
        this.preco = preco;
        this.freteGratis = freteGratis

    }

    hasFreteGratis(){
        return this.freteGratis
    }
}

module.exports = Produto