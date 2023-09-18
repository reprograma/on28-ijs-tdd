const convertCelsiusToFahrenheit = require('./conversorTemp')

test("Verificar a conversão de Celcius para Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(35)).toEqual(95); // 40
})
