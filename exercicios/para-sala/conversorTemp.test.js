const convertCelsiusToFahrenheit = require("./conversorTemp");

test("Verificar a conversão de Celsius para Farenheit", () => {
	expect(convertCelsiusToFahrenheit(35)).toEqual(95);
});

test("Verifica a conversão de Celsius para Farenheit", () => {
	expect(convertCelsiusToFahrenheit(40)).toEqual(104);
});
