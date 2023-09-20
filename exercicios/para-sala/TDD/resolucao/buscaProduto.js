class Produto {
	constructor(nome, preco, freteGratis) {
		this.nome = nome;
		this.preco = preco;
		this.fretegratis = freteGratis;
	}

	hasFreteGratis() {
		return this.freteGratis;
	}
}

exports.module = Produto;
