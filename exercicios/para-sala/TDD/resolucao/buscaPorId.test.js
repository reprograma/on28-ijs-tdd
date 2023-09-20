const getCompanyById = require("./buscaPorId");

test("caso nenhum id seja passado o resultado deve ser undefined", () => {
	expect(getCompanyById()).toBeUndefined();
});
