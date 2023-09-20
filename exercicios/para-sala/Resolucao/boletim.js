function calcularBoletim(nota){
    const resultado = nota >= 6 ? 'aprovado' : 'reprovado' // condiçao ? true : false
    return resultado

    /*
    if(nota >= 6){
        return 'aprovado'
    }else{
        return 'reprovado'
    }
    */
}

module.exports = calcularBoletim