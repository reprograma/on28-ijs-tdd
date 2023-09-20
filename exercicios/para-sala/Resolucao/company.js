function getCompanyById(id){
    if(!id) return undefined

    return {
        nome: "Reprograma",
        email: "contato@reprograma.com.br"
    }
}

console.log(getCompanyById())


module.exports = getCompanyById