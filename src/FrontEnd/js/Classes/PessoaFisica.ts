import {Pessoa} from "./Pessoa.js";

export class PessoaFisica extends Pessoa {
    cpf: string;
    idade: number;
    constructor(nome: string, email: string, cpf:string, idade: number ,pais: string, estado: string, cep:string, descricao: string, skills: Array<string>) {
        super(nome,email,pais,estado,cep,descricao,skills);
        this.cpf = cpf;
        this.idade = idade
    }
}