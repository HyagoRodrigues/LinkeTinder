package com.hrodrigues.BancoDeDados

import groovy.sql.Sql

class BD {
    static void listar_candidatos(){
        def sql = Sql.newInstance(
                "jdbc:postgresql://localhost:5432/linketinder",
                "hyago",
                "acesso123",
                "org.postgresql.Driver"
        )
        sql.eachRow('SELECT * FROM candidatos'){
            tp ->
                println("\nNome: ${tp.nome} ${tp.sobrenome}" +
                        " \nDescrição: ${tp.descricao}" +
                        "\n------------------------------"
                )
        }
        sql.close();
    }

    static void listar_empresas(){
        def sql = Sql.newInstance(
                "jdbc:postgresql://localhost:5432/linketinder",
                "hyago",
                "acesso123",
                "org.postgresql.Driver"
        )

        sql.eachRow('SELECT * FROM empresas'){
            tp ->
                println("\nNome: ${tp.nome}" +
                        " \nDescrição: ${tp.descricao}" +
                        "\n------------------------------"
                )
        }

        sql.close();
    }

    static  void listar_vagas(){
        def sql = Sql.newInstance(
                "jdbc:postgresql://localhost:5432/linketinder",
                "hyago",
                "acesso123",
                "org.postgresql.Driver"
        )

        sql.eachRow('SELECT * FROM vagas'){
            tp ->
                println("\nNome: ${tp.nome}" +
                        " \nDescrição: ${tp.descricao}" +
                        " \nDescrição: ${tp.localizacao}" +
                        "\n------------------------------"
                )
        }

        sql.close();
    }

    static void inserir_candidato() {
        def sql = Sql.newInstance(
                "jdbc:postgresql://localhost:5432/linketinder",
                "hyago",
                "acesso123",
                "org.postgresql.Driver"
        )

        sql.connection.autoCommit = false

        println "Digite o nome do Candidato"
        def nome = System.in.newReader().readLine();
        println "Digite o sobrenome do Candidato"
        def sobrenome = System.in.newReader().readLine();
        println "Digite a data de nascimento do Candidato"
        def data_nascimento = System.in.newReader().readLine();
        println "Digite o email do Candidato"
        def email = System.in.newReader().readLine();
        println "Digite o cpf do Candidato"
        def cpf = System.in.newReader().readLine();
        println "Digite o país do Candidato"
        def pais = System.in.newReader().readLine();
        println "Digite o CEP do Candidato"
        def cep = System.in.newReader().readLine();
        println "Digite a descrição do Candidato"
        def descricao = System.in.newReader().readLine();
        println "Digite a senha do Candidato"
        def senha = System.in.newReader().readLine();

        def sqlstr = "INSERT INTO candidatos(nome, sobrenome, data_nascimento, email, cpf, pais, cep, descricao, senha) VALUES " + "('${nome}', '${sobrenome}', '${data_nascimento}', '${email}', '${cpf}', '${pais}', '${cep}', '${descricao}', '${senha}' )"

        try{
            sql.execute(sqlstr);
            sql.commit()
            println("Candidato Cadastrado com sucesso!")
        }catch(Exception ex){
            sql.rollback()
            println(ex)
        }
        sql.close()
    }

    static void inserir_empresa(){
        def sql = Sql.newInstance(
                "jdbc:postgresql://localhost:5432/linketinder",
                "hyago",
                "acesso123",
                "org.postgresql.Driver"
        )
        sql.connection.autoCommit = false

        println "Digite o nome da Empresa"
        def nome = System.in.newReader().readLine();
        println "Digite o CNPJ da Empresa"
        def cnpj = System.in.newReader().readLine();
        println "Digite o email Corporativo"
        def email = System.in.newReader().readLine();
        println "Digite a descrição da Empresa"
        def descricao = System.in.newReader().readLine();
        println "Digite o país onde a Empresa se encontra"
        def pais = System.in.newReader().readLine();
        println "Digite o CEP da Empresa"
        def cep = System.in.newReader().readLine();
        println "Digite a senha da Empresa"
        def senha = System.in.newReader().readLine();

        def sqlstr = "INSERT INTO empresas(nome, cnpj, email, descricao, pais, cep, senha) VALUES " + "('${nome}', '${cnpj}', '${email}', '${descricao}', '${pais}', '${cep}', '${senha}' )"

        try{
            sql.execute(sqlstr);
            sql.commit()
            println("Empresa Cadastrada com sucesso!")
        }catch(Exception ex){
            sql.rollback()
            println(ex)
        }
        sql.close()
    }

    static void inserir_vaga(){
        def sql = Sql.newInstance(
                "jdbc:postgresql://localhost:5432/linketinder",
                "hyago",
                "acesso123",
                "org.postgresql.Driver"
        )

        sql.connection.autoCommit = false

    }
}

