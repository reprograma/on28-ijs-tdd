// Produto -  nome, preço, estoque
// consultar o estoque, adicionar ao estoque, remover do estoque
// Caso voce mais itens do que tem no estoque - resulta em erro

// adicionar ao estoque, consulta de estoque, remover do estoque

class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    consultarEstoque(){
        return this.estoque
    }

    adicionarAoEstoque(quantidade){
        this.estoque = this.estoque + quantidade
        return this.consultarEstoque()
    }

    removerDoEstoque(quantidade){
        if(quantidade > this.estoque){
            throw new Error('Estoque insuficiente')
        }else{
            this.estoque = this.estoque - quantidade
        }
        return this.consultarEstoque()
    }
}

const empada = new Produto("Empada", 7, 25)

console.log(empada)
console.log(empada.adicionarAoEstoque(2))
console.log(empada)
console.log(empada.removerDoEstoque(2))
console.log(empada.consultarEstoque())

module.exports = Produto