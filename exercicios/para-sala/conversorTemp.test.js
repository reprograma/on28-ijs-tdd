const convertCelsiusToFahrenheit = require("./conversorTemp");

test("Verificar a conversão de Celsius para Fahrenheit", () => {
  expect(convertCelsiusToFahrenheit(35)).toEqual(95);
});

test("Verificar a conversão de Celsius para Fahrenheit", () => {
  expect(convertCelsiusToFahrenheit(40)).toEqual(104);
});
