

const { Titular } = require ('./Titular.js');

class Conta{
    static contas = []
    constructor(saldo, senha, agencia, numero_conta, titular){
        this.saldo = saldo
        this.senha = senha
        this.agencia = agencia
        this.numero_conta = numero_conta
        this.titular = titular
        Conta.contas.push(this)
    }

    static autenticar(agencia, numero, senha){
        let contas = Conta.contas
    
        var contaRetorno = null
        contas.forEach((conta) =>{
            if(conta.agencia == agencia && conta.senha == senha && conta.numero_conta == numero){
                return contaRetorno = conta
            }
            
        })

        if(contaRetorno != null){
            return {conta: contaRetorno, acesso: true}
        } else {
            return {conta: null, acesso: false}
        }
    }

    visualizarSaldo(acesso){
        if(acesso){
            return {saldo : this.saldo}
        } else {
            return {error: "Acesso negado"}
        }
    }

    saque(valor, acesso){
        if(acesso){
            if(valor <= this.saldo){
                this.saldo = this.saldo - valor
                return {saque : `Saque de ${valor} realizado com sucesso, seu saldo atual é ${this.saldo}`}
            } else{
                return {saque : `Saque não realizado por falta de saldo`}
            }
        } else {
            return {error: "Acesso negado"}
        }
    }

    depositar(valor, acesso){
        if(acesso){
            this.saldo = this.saldo + valor
            return {deposito : `Realizado deposito de ${valor} com sucesso, seu saldo atual é ${this.saldo}`}
        } else {
            return {deposito: "Acesso negado"}
        }
    }

    transferir(origem, destino, valor){
        // validar a origem
        let resp = Conta.autenticar(origem.agencia, origem.numero, origem.senha)
        let contaOrigem = resp.conta
        
        if(contaOrigem == null){
            return {conta : "Conta de origem inexistente"}
        }

        // validar o destino
        let resp2 = Conta.autenticar(destino.agencia, destino.numero, destino.senha)
        let contaDestino = resp2.conta
        if(contaDestino == null){
            return {conta : "Conta de destino inexistente"}
        } 

        let resp3 = origem.saque(valor, true)
        if(`Saque não realizado por falta de saldo` != resp3.saque){
            destino.depositar(valor, true)
            return {transferencia: "Realizada com sucesso"}
        } else{
            return {transferencia: "Não realizada com sucesso"}
        }
    }

    cobrarTaxar(){

    }

    static gerarContas(){
        Titular.gerarTitulares()
        let titulares = Titular.titulares
        new Conta(500, 1234, 543, 2598, titulares[0])
        new Conta(1500, 5678, 789, 78943, titulares[1])
        new Conta(2000, 45678, 7894, 235899, titulares[2]) 
        new Conta(750, 5678, 987, 1234, titulares[3])
        new Conta(300, 2345, 456, 7890, titulares[4])
        new Conta(900, 6789, 321, 4567, titulares[5])
        new Conta(450, 3456, 654, 8901, titulares[6])
        new Conta(600, 4567, 789, 2345, titulares[7])
        new Conta(850, 7890, 123, 6789, titulares[8])
        new Conta(400, 8901, 234, 3456, titulares[9])
        new Conta(700, 9012, 345, 4568, titulares[10])
        new Conta(550, 123, 456, 5679, titulares[11])
        new Conta(950, 1239, 567, 6780, titulares[12])
    }
 }





 module.exports = {Conta}