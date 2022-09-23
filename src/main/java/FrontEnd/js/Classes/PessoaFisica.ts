import {Pessoa} from "./Pessoa.js";

export class PessoaFisica extends Pessoa {
    cpf: string;
    idade: number;
    telefone: string;
    linkedin: string;
    constructor(nome: string, email: string, telefone: string, linkedin: string, cpf:string, idade: number ,pais: string, estado: string, cep:string, descricao: string, skills: Array<string>) {
        super(nome,email,pais,estado,cep,descricao,skills);
        this.cpf = cpf;
        this.idade = idade;
        this.telefone = telefone;
        this.linkedin = linkedin;
    }
}