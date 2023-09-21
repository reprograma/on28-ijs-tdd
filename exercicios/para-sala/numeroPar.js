//2

function checkEvenNumber(num){
    let result = '';

    if(isNaN(num)) {
        result = num + " não é um número"; // batata não é um número
    } else {
        if (num % 2 == 0) {
            result = num + " é um número par"; // 2 é um número par
        } else {
            result = num + " é um número ímpar"; //3 é um número impar
        }
    }

    return result;
}

module.exports = checkEvenNumber