import { Pessoa } from "./Pessoa.js";
export class PessoaFisica extends Pessoa {
    constructor(nome, email, cpf, idade, pais, estado, cep, descricao, skills) {
        super(nome, email, pais, estado, cep, descricao, skills);
        this.cpf = cpf;
        this.idade = idade;
    }
}
