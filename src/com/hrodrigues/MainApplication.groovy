package com.hrodrigues

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
    println("Escolha uma opção: \n 1 - Listar Empresas \n 2 - Listar Candidatos \n 3 - Salvar Empresa \n 4 - Salvar Candidato \n 5 - Sair")
    int opcao = System.in.newReader().readLine().toInteger()
    switch(opcao){
        case 1:
            Listar.PJ(listaPessoaJuridica)
            break
        case 2:
            Listar.PF(listaPessoaFisica)
            break
        case 3:
            listaPessoaJuridica << Cadastrar.PessoaJuridica()
            break
        case 4:

            listaPessoaFisica << Cadastrar.PessoaFisica()
            break
        case 5:
            exit = true
            break
    }
}
