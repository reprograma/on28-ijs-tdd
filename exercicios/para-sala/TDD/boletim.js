function calcularBoletim(nota){
    if(nota >= 6){
        return 'aprovado'
    }
    return 'reprovado'
}

module.exports = calcularBoletim