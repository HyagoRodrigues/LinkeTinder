package com.hrodrigues

import com.hrodrigues.BancoDeDados.BD
import com.hrodrigues.Classes.Listas
import com.hrodrigues.Classes.PessoaFisica
import com.hrodrigues.Classes.PessoaJuridica
import com.hrodrigues.Metodos.Cadastrar
import com.hrodrigues.Metodos.Listar


List<PessoaFisica> listaPessoaFisica = [];
List<PessoaJuridica> listaPessoaJuridica = [];


for(pf in Listas.listaPessoaFisica()){;
    listaPessoaFisica << pf;
}

for (pj in Listas.listaPessoaJuridica()){
    listaPessoaJuridica << pj;
}

boolean exit = false

while(!exit){
    println("Escolha uma opção: " +
            "\n 1 - Listar Empresas " +
            "\n 2 - Listar Candidatos " +
            "\n 3 - Listar Vagas" +
            "\n 4 - Inserir novo Candidato " +
            "\n 5 - Inserir nova Empresa " +
            "\n 6 - Sair"
    )
    int opcao = System.in.newReader().readLine().toInteger()
    switch(opcao){
        case 1:
            BD.listar_empresas()
            break
        case 2:
            BD.listar_candidatos()
            break
        case 3:
            BD.listar_vagas()
            break
        case 4:
            BD.inserir_candidato()
            break
        case 5:
            BD.inserir_empresa()
            break
        case 6:
            exit = true
            break
        default :
            println("Escolha uma opção válida")
    }
}
