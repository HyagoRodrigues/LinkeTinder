package com.hrodrigues.BancoDeDados

import groovy.sql.Sql

class Conexao {
    static def url = "jdbc:postgresql://localhost:5432/linketinder";
    static def user = "hyago";
    static def password = "acesso123";
    static def driver = "org.postgresql.Driver";

    static Sql conect(){ Sql sql = Sql.newInstance(url,user,password,driver)}
}
