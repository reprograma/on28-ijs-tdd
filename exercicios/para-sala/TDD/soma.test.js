// 6

const sum = require("./soma");

// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("sum two numbers", () => {
	it("sum of 2 and 3 = 5", () => {
		//it é a mesma coisa que teste

		expect(sum(2, 3)).toEqual(5);
	});
	it("result of equal numbers", () => {
		//it é a mesma coisa que teste

		expect(sum(3, 3)).toEqual(18);
	});
});
