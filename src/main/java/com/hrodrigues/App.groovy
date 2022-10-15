package com.hrodrigues

import com.hrodrigues.BancoDeDados.CandidatoDAO
import com.hrodrigues.BancoDeDados.EmpresaDAO
import com.hrodrigues.BancoDeDados.VagasDAO

class App {
    static void main(String[] args) {
        boolean exit = false;
        while (!exit) {
            println("Escolha uma opção: " +
                    "\n 1 - Listar Empresas " +
                    "\n 2 - Listar Candidatos " +
                    "\n 3 - Listar Vagas" +
                    "\n 4 - Inserir novo Candidato " +
                    "\n 5 - Inserir nova Empresa " +
                    "\n 6 - Sair"
            )
            int opcao = System.in.newReader().readLine().toInteger()
            switch (opcao) {
                case 1:
                    EmpresaDAO.listar_empresas();
                    break
                case 2:
                    CandidatoDAO.listar_candidatos();
                    break
                case 3:
                    VagasDAO.listar_vagas();
                    break
                case 4:
                    CandidatoDAO.menu_candidato();
                    break
                case 5:
                    EmpresaDAO.menu_empresa();
                    break
                case 6:
                    exit = true
                    break
                default:
                    println("Escolha uma opção válida")
            }
        }

    }
}