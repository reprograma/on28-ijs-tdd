> node v18.12.1 | npm 8.19.2

na pasta de resolucao (exercicios/para-sala/resolucao)

`npm init -y` - Gera o arquivo com configurações básicas

`npm i --save-dev jest`

no arquivo `package.json` alterar a linha 7 para `"test": "jest"`


----


no arquivo `package.json` alterar a linha 7 para `"test": "jest --coverage"`

Alias: --coverage. Indica que as informações de cobertura de teste devem ser coletadas e relatadas na saída.

`describe` divide seu conjunto de testes em componentes. Dependendo da sua estratégia de teste, você pode ter uma descrição para cada função da sua classe, cada módulo do seu plugin ou cada funcionalidade voltada para o usuário.

`it` ou `test` é onde você realiza testes individuais. Você deve ser capaz de descrever cada teste como uma pequena frase, como "ele calcula a área quando o raio é definido". Você não deve ser capaz de subdividir ainda mais os testes - se achar necessário, use descrever.



https://jestjs.io/pt-BR/docs/api
https://jestjs.io/pt-BR/docs/expect
