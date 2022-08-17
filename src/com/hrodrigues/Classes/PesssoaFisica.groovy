package com.hrodrigues.Classes

class PesssoaFisica extends Pessoa {
    String cpf;
    Integer idade;

    static PesssoaFisica New(String nome, String email, String descricao, String estado, String pais, String cep, String cpf, Integer idade, List<String> skills){
        PesssoaFisica candidato = new PesssoaFisica();
        candidato.nome = nome;
        candidato.email = email;
        candidato.descricao = descricao;
        candidato.estado = estado;
        candidato.pais = pais;
        candidato.cep = cep;
        candidato.cpf = cpf;
        candidato.idade = idade;
        candidato.skills = skills;

        return candidato;
    }

}

