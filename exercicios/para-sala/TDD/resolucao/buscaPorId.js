function getCompanyById(id) {
	if (!id) {
		return undefined;
	} else {
		return {
			nome: "Sunrise",
			email: "contato@sunrise.com.br",
		};
	}
}

module.exports = getCompanyById;
