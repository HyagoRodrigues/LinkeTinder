package com.hrodrigues.Metodos

import com.hrodrigues.Classes.PessoaFisica
import com.hrodrigues.Classes.PessoaJuridica

// Listar Pessoas Fisicas
static void PF(ListarPF){
    for(PessoaFisica candidato in ListarPF){
        println ("" + "Nome: " + candidato.nome + "\n" + "Email: " + candidato.email + "\n" + "Descrição: " + candidato.descricao + "\n" + "Estado: " + candidato.estado + "\n" + "Pais: " + candidato.pais + "\n" + "CEP: " + candidato.cep + "\n" + "CPF: " + candidato.cpf + "\n" + "Idade: " + candidato.idade + "\n" + "Competências: " + candidato.skills + "\n");
    }
}


//Listar Pessoas Juridicas

static void PJ(listaPJ){
    for(PessoaJuridica empresa in listaPJ){
        println ("" + "Nome: " + empresa.nome + "\n" + "Email: " + empresa.email + "\n" + "Descrição: " + empresa.descricao + "\n" + "Estado: " + empresa.estado + "\n" + "Pais: " + empresa.pais + "\n" + "CEP: " + empresa.cep + "\n" + "CNPJ: " + empresa.cnpj + "\n" + "Competências: " + empresa.skills + "\n");
    }
}