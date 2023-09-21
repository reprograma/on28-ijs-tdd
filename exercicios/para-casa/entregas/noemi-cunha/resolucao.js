class Conta {
	constructor(nome, saldo, limite, limiteativo) {
		this.nome = nome;
		this.saldo = saldo;
		this.limite = limite;
		this.limiteativo = limiteativo;
	}

	consultaSaldo() {
		return this.saldo;
	}

	consultaLimite() {
		if (this.limiteativo) {
			return this.limite;
		}
	}

	deposito(valor) {
		this.saldo = this.saldo + valor;
	}

	saque(valor) {
		if (this.limiteativo) {
			if (valor <= this.saldo + this.limite) {
				this.saldo = this.saldo - valor;
			} else {
				return "Saldo indisponível";
			}
		} else {
			return "Limite não ativo";
		}
	}

	ajusteDoLimite(valor) {
		if (this.limiteativo) {
			this.limite = valor;
		}
	}

	desativaLimite() {
		this.limiteativo = !this.limiteativo;
	}

	ativaLimite() {
		return this.limiteativo;
	}
}

module.exports = Conta;
 