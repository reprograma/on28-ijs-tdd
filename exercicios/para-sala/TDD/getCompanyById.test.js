const getCompanyById = require('./getCompanyById');

it('caso nenhum id seja passado o resultado deve ser undefined', () => {
    expect(getCompanyById()).toBeUndefined();
});