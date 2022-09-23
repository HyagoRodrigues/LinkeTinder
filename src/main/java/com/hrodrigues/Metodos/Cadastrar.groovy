package com.hrodrigues.Metodos


import com.hrodrigues.Classes.PessoaFisica
import com.hrodrigues.Classes.PessoaJuridica

// Cadastra Pessoa Fisica
static PessoaFisica() {
    PessoaFisica pf = new PessoaFisica();
    List<String> skill = new ArrayList<String>();
    int op = 0;
    println("Digite o nome do candidato: ");
    pf.nome = System.in.newReader().readLine();
    println("Digite o email do candidato: ");
    pf.email = System.in.newReader().readLine();
    println("Digite a descrição do candidato: ");
    pf.descricao = System.in.newReader().readLine();
    println("Digite o estado do candidato: ");
    pf.estado = System.in.newReader().readLine();
    println("Digite o país do candidato: ");
    pf.pais = System.in.newReader().readLine();
    println("Digite o CEP do candidato: ");
    pf.cep = System.in.newReader().readLine();
    println("Digite o CPF do candidato: ");
    pf.cpf = System.in.newReader().readLine();
    println("Digite a idade do candidato: ");
    pf.idade = System.in.newReader().readLine().toInteger();
    //salvar as skills do candidato
    while(op != 9){
        println("Escolha uma Competência: \n 1 - Java \n 2 - Groovy \n 3 - JavaScript \n 4 - TypeScript \n 5 - Grails \n 6- Angular");
        int opS = System.in.newReader().readLine().toInteger();
        switch (opS){
            case 1:
                skill.add("Java");
                break;
            case 2:
                skill.add("Groovy");
                break;
            case 3:
                skill.add("JavaScript");
                break;
            case 4:
                skill.add("TypeScript");
                break;
            case 5:
                skill.add("Grails");
                break;
            case 6:
                skill.add("Angular");
                break;
            default:
                println("Escolha uma Skill");
                break;
        }

        println("Digite 1 para continuar ou 9 para sair: ");
        op = System.in.newReader().readLine().toInteger();
    }
    pf.skills = skill;
    return pf;
}


// Cadastrar Pessoa Juridica
static PessoaJuridica() {
    PessoaJuridica empresa = new PessoaJuridica();
    List<String> skill = new ArrayList<String>();
    int op = 0;

    println("Digite o nome da empresa: ");
    empresa.nome = System.in.newReader().readLine();
    println("Digite o email da empresa: ");
    empresa.email = System.in.newReader().readLine();
    println("Digite a descrição da empresa: ");
    empresa.descricao = System.in.newReader().readLine();
    println("Digite o estado da empresa: ");
    empresa.estado = System.in.newReader().readLine();
    println("Digite o país da empresa: ");
    empresa.pais = System.in.newReader().readLine();
    println("Digite o CEP da empresa: ");
    empresa.cep = System.in.newReader().readLine();
    println("Digite o CNPJ da empresa: ");
    empresa.cnpj = System.in.newReader().readLine();
    //salvar as skills da empresa
    while(op != 9){
        println("Escolha uma Competência: \n 1 - Java \n 2 - Groovy \n 3 - JavaScript \n 4 - TypeScript \n 5 - Grails \n 6- Angular");
        int opS = System.in.newReader().readLine().toInteger();
        switch (opS){
            case 1:
                skill.add("Java");
                break;
            case 2:
                skill.add("Groovy");
                break;
            case 3:
                skill.add("JavaScript");
                break;
            case 4:
                skill.add("TypeScript");
                break;
            case 5:
                skill.add("Grails");
                break;
            case 6:
                skill.add("Angular");
                break;
            default:
                println("Escolha uma Skill");
                break;
        }
        println("Digite 1 para continuar ou 9 para sair: ");
        op = System.in.newReader().readLine().toInteger();
    }
    empresa.skills = skill;
    return empresa;
}
