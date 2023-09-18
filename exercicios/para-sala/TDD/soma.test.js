const sum = require('./soma')

// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("soma de 2 números", () => {
   it('soma de 2 + 3 = 5', () => {

    expect(sum(2, 3)).toEqual(5);
   })
});
