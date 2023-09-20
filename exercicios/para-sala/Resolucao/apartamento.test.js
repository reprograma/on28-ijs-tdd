const buildApartamentTags = require('./apartamento')

test('listar os itens da tag de apartamento compartilhado', () => {
    const shared = true
    const individual = false
    const expectedProps = {
        icon: 'shared',
        color: 'green',
        background: 'gray',
        label: 'Compartilhado',
    }
    
    expect(buildApartamentTags(shared)).not.toBeUndefined()
    expect(buildApartamentTags(shared)).toMatchObject(expectedProps)
});