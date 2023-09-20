const calcularBoletim = (nota) => {
    const resultado = nota >= 6 ? 'aprovado' : 'reprovado'
    
    return resultado
};

module.exports = calcularBoletim