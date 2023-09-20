function buildApartamentTags(isShared){

    if(isShared){
        return {
            icon: 'shared',
            color: 'green',
            background: 'gray',
            label: 'Compartilhado',
        }
    }

    return {
        icon: 'individual',
        color: 'blue',
        background: 'white',
        label: 'Individual',

    }

}

module.exports = buildApartamentTags