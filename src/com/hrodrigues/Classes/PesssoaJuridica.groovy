package com.hrodrigues.Classes

class PesssoaJuridica extends Pessoa {
    String cnpj;

    static PesssoaJuridica New(String nome, String email, String descricao, String estado, String pais, String cep, String cnpj, List<String> skills){
        PesssoaJuridica empresa = new PesssoaJuridica();
        empresa.setNome(nome);
        empresa.setEmail(email);
        empresa.setDescricao(descricao);
        empresa.setEstado(estado);
        empresa.setPais(pais);
        empresa.setCep(cep);
        empresa.setCnpj(cnpj);
        empresa.setSkills(skills);
        return empresa;
    }

}

