function calcularBoletim(nota) {
	if ((nota) => 7) {
		return "aprovado";
	} else {
		return "reprovado";
	}
}

module.exports = calcularBoletim;
