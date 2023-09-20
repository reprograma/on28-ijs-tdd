const getCompanyById = require('./company')

it('caso nenhum id seja passado o resultado deve ser undefined', () => {
    expect(getCompanyById()).toBeUndefined();
});