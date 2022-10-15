package com.hrodrigues.BancoDeDados

import com.hrodrigues.BancoDeDados.Conexao
import com.hrodrigues.Classes.PessoaFisica
import com.hrodrigues.Metodos.Utils
import groovy.sql.Sql


class CandidatoDAO {

    static void listar_candidatos() {
        def sql = Conexao.conect()
        sql.eachRow('SELECT * FROM candidatos') {
            tp ->
                println("\nNome: ${tp.nome} ${tp.sobrenome}" +
                        "\nDescrição: ${tp.descricao}")
                println("Competências: ")
                listar_competencias_candidato(tp.id)
                println("------------------------------")
        }
        sql.close();
    }

    static void listar_competencias_candidato(id) {
        def sql = Conexao.conect();
        sql.eachRow('SELECT com.nome as nome\n' +
                'FROM candidato_competencias ccom\n' +
                'JOIN candidatos c ON c.id = ccom.id_candidato\n' +
                'JOIN competencias com ON com.id = ccom.id_competencias\n' +
                'WHERE c.id = ' + id + '') {
            comp ->
                println(comp.nome)
        }
        sql.close();
    }

    static void inserir_candidato(candidato) {
        Sql sql = Conexao.conect()
        sql.connection.autoCommit = false
        Date data_nascimento = Utils.converte_data_type(candidato.data_nascimento);
        List<String> parametros = [candidato.nome, candidato.sobrenome, data_nascimento, candidato.email, candidato.cpf, candidato.pais, candidato.cep, candidato.descricao, candidato.senha]
        def candID
        try {
            sql.executeInsert("INSERT INTO candidatos(nome, sobrenome, data_nascimento, email, cpf, pais, cep, descricao, senha) VALUES (?,?,?,?,?,?,?,?,?)", parametros)
            sql.commit()
            sql.eachRow("SELECT * FROM candidatos WHERE cpf = $candidato.cpf") {
                cand ->
                    candID = cand.id
            }
            inserir_competencias_candidato(candID)
            println("Candidato Cadastrado com sucesso!")
        } catch (Exception ex) {
            sql.rollback()
            println(ex)
        }
        sql.close()
    }

    static void inserir_competencias_candidato(candID) {
        Sql sql = Conexao.conect()
        sql.connection.autoCommit = false;
        println "Escolha a competência: "
        int opcao = 1;
        while (opcao != 9) {
            sql.eachRow("SELECT * FROM competencias") {
                comp ->
                    println "${comp.id} - ${comp.nome}"
            }
            int opcaoCompetencia = System.in.newReader().readLine().toInteger();
            def inserirCompetencia = "INSERT INTO candidato_competencias(id_candidato, id_competencias) VALUES ($candID,$opcaoCompetencia)"
            sql.execute(inserirCompetencia)
            println("Digite 0 para continuar ou 9 para sair: ");
            opcao = System.in.newReader().readLine().toInteger();
        }
        sql.commit()
        sql.close()

    }

    static void menu_candidato() {
        PessoaFisica candidato = new PessoaFisica()
        println "Digite o nome do Candidato"
        candidato.nome = System.in.newReader().readLine();
        println "Digite o sobrenome do Candidato"
        candidato.sobrenome = System.in.newReader().readLine();
        println "Digite a data de nascimento do Candidato Ex: 00/00/0000"
        def data_input = System.in.newReader().readLine();
        println "Digite o email do Candidato"
        candidato.email = System.in.newReader().readLine();
        println "Digite o cpf do Candidato"
        candidato.cpf = System.in.newReader().readLine();
        println "Digite o país do Candidato"
        candidato.pais = System.in.newReader().readLine();
        println "Digite o CEP do Candidato"
        candidato.cep = System.in.newReader().readLine();
        println "Digite a descrição do Candidato"
        candidato.descricao = System.in.newReader().readLine();
        println "Digite a senha do Candidato"
        candidato.senha = System.in.newReader().readLine();

        candidato.data_nascimento = Utils.formata_data(candidato.data_nascimento, data_input)
        CandidatoDAO.inserir_candidato(candidato)
    }

}
