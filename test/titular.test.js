
const {Titular} = require('../model/Titular.js')

Titular.gerarTitulares();
var titulares = Titular.titulares;

// buscarTitulares
test('Testar tamanho da lista de titulares', function(){
    expect(titulares.length).toBe(20)
})

test('Testar as chaves do primeiro titular', function(){
    expect(titulares[0]).toHaveProperty('nome')
    expect(titulares[0]).toHaveProperty('cpf')
    expect(titulares[0]).toHaveProperty('endereco')
    expect(titulares[0]).toHaveProperty('telefone')
    expect(titulares[0]).toHaveProperty('email')
    expect(titulares[0]).toHaveProperty('dataNasc')
})

test('Testar os valores do primeiro titular', function(){
    expect(titulares[0]).toHaveProperty('nome', "João Quebrado")
    expect(titulares[0]).toHaveProperty('cpf', '5663535-63')
    expect(titulares[0]).toHaveProperty('endereco', 'Rua da Sorte')
    expect(titulares[0]).toHaveProperty('telefone', '11 190')
    expect(titulares[0]).toHaveProperty('email', 'quebrado@gmail.com')
    expect(titulares[0]).toHaveProperty('dataNasc', '29.08.1963' )
})


