function buildApartamentTags(shared) {
  if (shared) {
    return {
      icon: 'shared',
      color: 'green',
      background: 'gray',
      label: 'Compartilhado',
    };
  } else {
    return null; 
  }
}
module.exports = buildApartamentTags;