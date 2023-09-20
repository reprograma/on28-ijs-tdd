class Produto {
  constructor(nome, preco, freteGratis) {
    this.nome = nome;
    this.preco = preco;
    this.freteGratis = freteGratis;
  }

  hasFreteGratis() {
    return this.freteGratis === true;
  }
}

module.exports = Produto;