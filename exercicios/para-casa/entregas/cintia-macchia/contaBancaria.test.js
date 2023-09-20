const contaBancaria = require("./contaBancaria")


describe("Conta Bancária", ()=> {
    
    let cliente

    beforeEach(()=> {
        cliente = new contaBancaria("Cintia", 200 , 250)
    })
    
   
    it("Deve retornar o valor do saldo ", ()=>{
        expect(cliente.consultarSaldo()).toEqual(200)     
    })


    it("Deve retonar o valor do linmite", ()=>{
        expect(cliente.consultarLimite()).toEqual(250)
    })


    it("Deve retornar valor de saldo mais limite disponivel", ()=>{
        expect(cliente.consultarSaldoTotal()).toEqual(450)
    })


    it("Deve realizar saque quando houver saldo ", ()=>{
        expect(cliente.fazerSaque(100)).toEqual(100)
    })

   
    it("Deve realizar saque do valor quando houver saldo e limite", ()=>{  
        expect(cliente.fazerSaque(250)).toEqual(-50)
    })


    it("Deve dar erro quando não houver saldo e limite ", ()=>{
        expect(() => {cliente.fazerSaque(1000);}).toThrow(new Error("Saldo Insuficiente"))
    })    
 

    it("Deve aumentar o valor do saldo", ()=>{
        expect(cliente.fazerDeposito(250)).toEqual(450) 
        
    })


    it("deve aumentar valor de limnite", () =>{
        expect(cliente.aumentarLimite(50)).toEqual(300)
    })
    

    it("deve reduzir valor de limite", ()=>{
        expect(cliente.reduzirLimite(100)).toEqual(150)
    })

   
    it("deve desativar valor de limite", ()=>{
        expect(cliente.desativarLimite()).toEqual("limite desativado")
    })


})