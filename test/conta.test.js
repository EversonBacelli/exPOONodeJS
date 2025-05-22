
const {Conta} = require('../model/Conta.js')

Conta.gerarContas()
let contas = Conta.contas

test.skip('Lista de contas', ()=>{

})

test.skip('Propriedades de uma conta', ()=>{
    
})

test.skip('Testar os valores de uma conta', ()=>{
    
})

test.skip('Testar a função autenticar', ()=>{
    
})

test.skip('Testar a função saque', ()=>{
    
})

test.skip('Testar a função visualizarSaldo', ()=>{
    let resp = contas[0].visualizarSaldo(true) //  { saldo : 500 }
    expect(resp.saldo).toBe(500)

    let resp2 = contas[0].visualizarSaldo(false)
    expect(resp2.error).toBe("Acesso negado")

})