class Produto{
    constructor(nome, preco, fretegratis) {
        this.nome = nome;
        this.preco = preco;
        this.fretegratis = fretegratis
    }

    hasFreteGratis(){
        return this.fretegratis
    }

}

module.exports = Produto