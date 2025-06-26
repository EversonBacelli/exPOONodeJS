
const {Conta} = require('../model/Conta.js')

Conta.gerarContas()
let contas = Conta.contas

test.skip('Lista de contas', ()=>{

})

test('Função transferir', ()=>{
    let origem = contas[5]
    let destino = contas[6]

    origem.transferir(origem, destino)

})

test('Testar a função saque', ()=>{
    // saque com sucesso
    let resp1 = contas[1].saque(500, true)
    let saque = resp1.saque
    expect(saque).toBe(`Saque de 500 realizado com sucesso, seu saldo atual é 1000`)
    // acesso negado
    let resp2 = contas[1].saque(500, false)
    let error = resp2.error
    expect(error).toBe("Acesso negado")
    // sem saldo
    let resp3 = contas[1].saque(5000, true)
    let saque3 = resp3.saque
    expect(saque3).toBe(`Saque não realizado por falta de saldo`) 

})

test('Testar a função autenticar', function (){
    let resp = Conta.autenticar(543, 2598, 1234)
    let conta = resp.conta
    let acesso = resp.acesso

    expect(conta.saldo).toBe(500)
    expect(acesso).toBe(true)

    let resp2 = Conta.autenticar(543, 2598, 12345545)
    let conta2 = resp2.conta
    let acesso2 = resp2.acesso

    expect(conta2).toBe(null)
    expect(acesso2).toBe(false)

})

test('Depositar', ()=>{
    let resp = contas[3].depositar(100, true)
    let resp2 = contas[3].depositar(100, false)

    expect(resp.deposito).toBe(`Realizado deposito de ${100} com sucesso, seu saldo atual é 850`)
    expect(resp2.deposito).toBe("Acesso negado")
    
})

test.skip('Testar a função visualizarSaldo', ()=>{
    let resp = contas[0].visualizarSaldo(true) //  { saldo : 500 }
    expect(resp.saldo).toBe(500)

    let resp2 = contas[0].visualizarSaldo(false)
    expect(resp2.error).toBe("Acesso negado")

})