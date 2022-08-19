package com.hrodrigues.Testes

import com.hrodrigues.Classes.PessoaFisica
import com.hrodrigues.Classes.PessoaJuridica

import groovy.test.GroovyTestCase

class LinkeTinderTest extends GroovyTestCase {

        void testCadastrarPF() {
            List<PessoaFisica> listaPessoaFisica = [];
                PessoaFisica pf = new PessoaFisica();
                List<String> skill = new ArrayList<String>();
                pf.nome = "João";
                pf.email = "j@email.com"
                pf.descricao = "Descrição";
                pf.estado = "SP";
                pf.pais = "Brasil";
                pf.cep = "12345-678";
                pf.cpf = "123.456.789-00";
                pf.idade = 20;
                pf.skills = skill;
                listaPessoaFisica << pf;
            def result = listaPessoaFisica
            assertEquals(result, listaPessoaFisica)
            }

        void testCadastrarPJ() {
            List<PessoaJuridica> listaPessoaJuridica = [];
                PessoaJuridica pj = new PessoaJuridica();
                List<String> skill = new ArrayList<String>();
                pj.nome = "Google";
                pj.email = "g@mail.com"
                pj.descricao = "Descrição";
                pj.estado = "SP";
                pj.pais = "Brasil";
                pj.cep = "12345-678";
                pj.cnpj = "123.456.789/0001-00";
                pj.skills = skill;
                listaPessoaJuridica << pj;
            def result = listaPessoaJuridica
            assertEquals(result, listaPessoaJuridica)
            }
}





