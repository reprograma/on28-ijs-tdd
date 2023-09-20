const  BankAccount = require ('./bankAccount')

let bankAccount;

beforeEach(() => {
    bankAccount = new BankAccount('Ana Beatriz Costa', 200.00 , 500.00)
})

describe('Deve validar métodos da conta bancária ', () => {

    test('getHolderName() - Deve retornar o nome do proprietário da conta', () => {
        const expectedResponse = {
            message: "Nome de proprietário da conta consultado com sucesso",
            name: "Ana Beatriz Costa"
        };
        expect(bankAccount.getHolderName()).toEqual(expectedResponse);
    });

    test('getBalance() - Deve retornar o saldo da conta', () => {
        const expectedResponse = {
            message: "Saldo da conta consultado com sucesso",
            balance: 200
        };
        expect(bankAccount.getBalance()).toEqual(expectedResponse);
    });

    test('getAllData() - Deve retornar todos os dados da conta', () => {
        const expectedResponse = {
            message: "Dados da conta consultados com sucesso",
            holderName: 'Ana Beatriz Costa',
            balance: 200,
            limit: 500.00
        };
        expect(bankAccount.getAllData()).toEqual(expectedResponse);
    })


    describe('Deve validar métodos referentes ao limite da conta', () => {

        test('getLimit() - Deve consultar limite', () => {
            const expectedResponse = {
                message: "Limite da conta consultado com sucesso",
                limit: 500
            };
            expect(bankAccount.getLimit()).toEqual(expectedResponse);
        });

        test('setLimit()- Deve reajustar limite', () => {
            const expectedResponse = {
                message: "Limite da conta reajustado com sucesso",
                limit: 1000.00
            };
            expect(bankAccount.setLimit(1000.00)).toEqual(expectedResponse);
        });

        test('setLimit()- Não deve reajustar limite, pois parâmetro passado não é do tipo number', () => {
           expect(() => bankAccount.setLimit('mil reais')).toThrow('Digite um número válido');
        });

        test('disableLimit()- Deve desabilitar o limite', () => {
            const expectedResponse = {
                message: "Limite da conta desabilitado com sucesso",
                limit: 'disabled'
            };
            expect(bankAccount.disableLimit()).toEqual(expectedResponse);
        });
    })

    describe('Deve validar método de saque em diferentes cenários', () => {

        test('Não deve fazer saque, pois valor passado não é número', () => {
            expect(() => bankAccount.withdrawal('mil reais')).toThrow('Digite um número válido');
        });

        test('Deve fazer o saque, retirando valor do saldo da conta disponível', () => {
            const expectedResponse = {
                message: "Saque realizado com sucesso",
                balance: 0.10 

            };
            expect(bankAccount.withdrawal(199.90)).toEqual(expectedResponse);
        })

        test('Deve fazer saque, quando não possui valor total disponível na conta mas possui limite', () => {
            const expectedResponse = {
                message: 'Saque realizado com sucesso, utilizando saldo da conta disponível e limite',
                balance: 0.00,
                limit: 400.00
            }
            expect(bankAccount.withdrawal(300)).toEqual(expectedResponse);
        });

        test('Não deve fazer o saque, pois não tem limite suficiente', () => {
            expect(() => bankAccount.withdrawal(800)).toThrow('Limite suficiente.O limite atual é de 50');
        });

        test('Não deve fazer o saque, pois não tem limite suficiente e nem saldo na conta', () => {
            const account = new BankAccount('Zé',0, 'disabled')
            expect(() => account.withdrawal(800)).toThrow('Saldo insuficiente e limite desabilitado');
        });

        test('Não deve fazer o saque, pois valor é negativo', () => {
            expect(() => bankAccount.withdrawal(-8)).toThrow('Digite um valor maior do que 0.00 para realizar o saque');
        })
    });

    describe('Deve validar métodos de depósito', () => {

        test('Deve fazer o deposito corretamente', () => {
            const expectedResponse = {
                message: 'Depósito de R$100 realizado com sucesso',
                balance: 300.00
            }
            expect(bankAccount.deposit(100)).toEqual(expectedResponse);
        });

        test('Não deve fazer deposito, pois valor enviado não é um número', () => {
            expect(() => bankAccount.deposit('mil reais')).toThrow('Digite um número válido');
        });

        test('Não deve fazer deposito, pois valor enviado é um número negativo', () => {
            expect(() => bankAccount.deposit(-3)).toThrow('Digite um valor maior do que 0.00 para realizar o deposito');
        })
    })

    describe('Deve testar função formattedLimit', () => {
        test('Deve retornar número formatado', () => {
            expect(bankAccount.formattedLimit(12.5014166541)).toEqual(12.50)
        });
        test('Deve retornar disabled quando valor enviado for disabled', () => {
            expect(bankAccount.formattedLimit('disabled')).toEqual('disabled')
        })
    })
})
