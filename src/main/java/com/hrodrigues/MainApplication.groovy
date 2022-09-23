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
            "\n 6 - Inserir uma Vaga" +
            "\n 7 - Inserir uma Competência" +
            "\n 8 - Sair"

    )
    int opcao = System.in.newReader().readLine().toInteger()
    switch(opcao){
        case 1:
            BD.listar_empresas()
//            Listar.PJ(listaPessoaJuridica)
            break
        case 2:
            BD.listar_candidatos()
//            Listar.PF(listaPessoaFisica)
            break
        case 3:
            BD.listar_vagas()
//            listaPessoaJuridica << Cadastrar.PessoaJuridica()
            break
        case 4:
            BD.inserir_candidato()
//            listaPessoaFisica << Cadastrar.PessoaFisica()
            break
        case 5:
            BD.inserir_empresa()
            break
        case 6:
            BD.inserir_vaga()
            break
        case 7:
            println("Inserir uma Competência")
            break
        case 8:
            exit = true
            break
        default :
            println("Escolha uma opção válida")
    }
}
