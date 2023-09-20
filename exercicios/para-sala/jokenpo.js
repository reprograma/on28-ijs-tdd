//3

function jokenpo(jogada1, jogada2){

    if (jogada1 === jogada2){
        return 'Empate!';
    }

    if ((jogada1 === 'pedra' && jogada2 === 'papel')
        || (jogada1 === 'papel' && jogada2 === 'tesoura')
        || (jogada1 === 'tesoura' && jogada2 === 'pedra')) {
      return 'Jogador 2 venceu!';
   }

   return 'Jogador 1 venceu!';
}

console.log(jokenpo("pedra", "tesoura"));

module.exports = jokenpo