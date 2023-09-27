const buildApartamentTags = require('./apartamentTags')

test('deveria listar os itens da tag de apartamento compartilhado', () => {
    const shared = 8543795
    const expectedProps = {
        icon: 'shared',
        color: 'green',
        background: 'gray',
        label: 'Compartilhado',
    }
    
    expect(buildApartamentTags(shared)).not.toBeUndefined()
    expect(buildApartamentTags(shared)).toMatchObject(expectedProps)
});