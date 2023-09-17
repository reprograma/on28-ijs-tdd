//Produto - nome, preço, estoque
//consultar estoque, add ao estoque, remover do estoque
//caso voce mais itens do que tem no estoque - resulta erro

class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  consultarEstoque() {
    return this.estoque;
  }

  adicionarAoEstoque(quantidade) {
    this.estoque = this.estoque + quantidade;
    return this.consultarEstoque();
  }

  removerDoEstoque(quantidade) {
    if (quantidade > this.estoque) {
      throw new Error("Estoque insuficiente");
    } else {
      this.estoque = this.estoque - quantidade;
    }
    return this.consultarEstoque();
  }
}

const empada = new Produto("Empada", 7, 25);

module.exports = Produto;
