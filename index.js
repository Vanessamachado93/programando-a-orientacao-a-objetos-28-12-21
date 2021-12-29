//import { Cliente } from "./Cliente.js";
//import {ContaCorrente} from "./ContaCorrente.js";
//const cliente1 = new Cliente();
//cliente1.nome = "Ricardo";
//cliente1.cpf = "11122233309";

//const cliente2 = new Cliente();

//cliente2.nome = "Alice";
//cliente2.cpf = "88822233309";

//const contaCorrenteRicardo = new ContaCorrente();
//contaCorrenteRicardo._saldo = 0;
//contaCorrenteRicardo.agencia = 1001;
//contaCorrenteRicardo.Cliente = cliente1;
//contaCorrenteRicardo.depositar(500);

//const conta2 = new ContaCorrente();
//conta2.cliente2 = cliente2;
//conta2.agencia = 102;
//contaCorrenteRicardo.transferir(200, conta2);

//console.log(conta2);
//console.log(contaCorrenteRicardo);


export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}
