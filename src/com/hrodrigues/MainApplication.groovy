package com.hrodrigues

import com.hrodrigues.Classes.PesssoaFisica
import com.hrodrigues.Classes.PesssoaJuridica
import com.hrodrigues.Metodos.Cadastrar
import com.hrodrigues.Metodos.Listar

List<PesssoaFisica> listaPessoaFisica = new ArrayList<PesssoaFisica>();
listaPessoaFisica.add(PesssoaFisica.New("João", "j@email.com","Back-end","SP","Brasil","12345","123456789",40,["Java", "C#", "Python" ]));
listaPessoaFisica.add(PesssoaFisica.New("Maria", "m@email.com","Back-end","DF","Brasil","12345","123456789",29,["Java", "C#", "Python" ]));
listaPessoaFisica.add(PesssoaFisica.New("Pedro", "p@email.com","Front-end","GO","Brasil","12345","123456789",25,["Javascript", "CSS", "HTML" ]));
listaPessoaFisica.add(PesssoaFisica.New("Ana", "a@email.com","DevFullStack","SP","Brasil","12345","123456789",33,["Javascript", "CSS", "HTML", "MongoDB" ]));
listaPessoaFisica.add(PesssoaFisica.New("José", "j@email.com","DevFullStack","SP","Brasil","12345","123456789",30,["AdobeXD", "PSC6", "Illustrator" ]));

List<PesssoaJuridica> listaPessoaJuridica = new ArrayList<PesssoaJuridica>();
listaPessoaJuridica.add(PesssoaJuridica.New("Google","g@email.com","Empresa de busca","SP","Brasil","12345","123456789",["Java", "C#", "Python"]));
listaPessoaJuridica.add(PesssoaJuridica.New("Facebook","ff@email.com", "Rede social","SP","Brasil","12345","123456789",["Javascript", "CSS", "HTML"]));
listaPessoaJuridica.add(PesssoaJuridica.New("Microsoft","m@email.com", "Empresa de desenvolvimento","SP","Brasil","12345","123456789",["Javascript", "CSS", "HTML", "MongoDB"]));
listaPessoaJuridica.add(PesssoaJuridica.New("Amazon","aa@email.com", "Empresa de compras","SP","Brasil","12345","123456789",["AdobeXD", "PSC6", "Illustrator"]));
listaPessoaJuridica.add(PesssoaJuridica.New("Apple","aaa@email.com", "Empresa de tecnologia","SP","Brasil","12345","123456789",["AdobeXD", "PSC6", "Illustrator"]));

//List<PesssoaFisica> listaPessoaFisica = [];
//List<PesssoaJuridica> listaPessoaJuridica = [];



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
