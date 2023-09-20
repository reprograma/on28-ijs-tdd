function requisicao(){
    return setTimeout(() => {}, 5000);
}

function fazerRequisicao(){
    const { _idleTimeout: time } = requisicao()

    if(time) return { time }

    return "Requisição feita com sucesso!"
}

module.exports = fazerRequisicao
