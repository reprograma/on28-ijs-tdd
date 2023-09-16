// 6

const sum = require('./soma')

// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("sum two numbers", () => {
   it('sum of 2 and 3 = 5', () => {

    expect(sum(2, 3)).toEqual(5);
   })
});
