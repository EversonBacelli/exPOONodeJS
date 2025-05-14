# Banco Digital - Sistema de Conta Bancária com Node.js

Este projeto implementa um sistema bancário simples usando **Node.js** e **Express**, aplicando **princípios de orientação a objetos**. O sistema oferece funcionalidades como consulta de saldo, saque, depósito e filtragem de contas.

## Tecnologias Utilizadas

### Node.js
![Node.js](https://upload.wikimedia.org/wikipedia/commons/6/69/Node.js_logo.svg)
Node.js é um ambiente de execução JavaScript que permite rodar código JavaScript no servidor, em vez de apenas no navegador. Ele é baseado no motor V8 do Google Chrome.

### Express
![Express](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)
Express é um framework para Node.js que simplifica a criação de APIs e servidores HTTP. Ele fornece recursos como roteamento, gerenciamento de requisições e integração com middleware.

### Orientação a Objetos
![OO](https://upload.wikimedia.org/wikipedia/commons/a/a7/Object-Oriented_Programming_Logo.svg)
A **Orientação a Objetos** é um paradigma de programação que organiza o software em "objetos", que são instâncias de classes. Os objetos interagem entre si, o que torna o código mais modular e reutilizável.

## Estrutura do Projeto

### `Conta.js`
Classe base para representar uma conta bancária. Contém métodos para autenticação, consulta de saldo, saque e depósito. As contas são armazenadas estaticamente.

### `ContaCorrente.js`
Herda de `Conta` e adiciona a funcionalidade de cobrar uma taxa fixa de 20 unidades do saldo.

### `ContaPoupanca.js`
Herda de `Conta`, mas sem modificações adicionais no momento.

### `Titular.js`
Classe que representa os titulares das contas, com informações pessoais como nome, CPF, endereço, etc. Um método estático cria um conjunto de titulares.

## API Endpoints

### `GET /contas`
Retorna uma lista com todas as contas cadastradas.

### `POST /consultar_saldo`
Permite consultar o saldo de uma conta. A requisição deve conter `agencia`, `numero` e `senha`.

### `GET /contas/:acima`
Filtra contas com saldo superior ao valor fornecido na URL.

### `POST /conta/saque`
Permite realizar um saque. A requisição deve conter `agencia`, `numero`, `senha` e `valor`.

### `POST /conta/deposito`
Permite realizar um depósito. A requisição deve conter `agencia`, `numero`, `senha` e `valor`.

### `GET /contasCC/`
Retorna uma lista com todas as contas correntes geradas.

## Instruções

1. Clone o repositório.
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Inicie o servidor:
    ```bash
    npm start
    ```
4. Acesse a API na URL `http://localhost:3000`.

## Princípios de Orientação a Objetos

- **Herança**: `ContaCorrente` e `ContaPoupanca` herdam de `Conta`, reutilizando seus métodos e atributos.
- **Encapsulamento**: As funcionalidades de saque, depósito e visualização de saldo são encapsuladas nas respectivas classes.
- **Polimorfismo**: Embora `ContaCorrente` e `ContaPoupanca` compartilhem métodos, cada uma pode ter comportamentos específicos (como o método `cobrarTaxa` em `ContaCorrente`).

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
