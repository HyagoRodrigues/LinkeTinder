var _a, _b;
import { PessoaFisica } from "./Classes/PessoaFisica.js";
import { empresas } from "./Empresa.js";
export const candidatos = new Array();
let nome = document.querySelector('#NomeInputC');
let email = document.querySelector('#EmailInputC');
let telefone = document.querySelector('#TelInputC');
let linkdin = document.querySelector('#LinkInputC');
let cpf = document.querySelector('#CpfInputC');
let idade = document.querySelector('#IdadeInputC');
let estado = document.querySelector('#EstadoInputC');
let cep = document.querySelector('#CepInputC');
let pais = document.querySelector('#PaisinputC');
let desc = document.querySelector('#DescInputC');
const canditado1 = new PessoaFisica("Eduardo", "e@email.com", "(61) 9888-5555", "https://www.linkedin.com/in/eduardo-457", "816.171.166-61", 22, "Brasil", "DF", "72590-000", "Desenvolvedor Junior", ["Java", "Groovy", "Angular", "TypeScript"]);
const canditado2 = new PessoaFisica("Maria Alice", "maria.alice@email.com", "(62) 9888-5555", "https://www.linkedin.com/in/maria-897", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedora Pleno", ["Java", "Groovy", "PostgreSQL", "Python"]);
const canditado3 = new PessoaFisica("Gabriel Fernandes", "maria.alice@email.com", "(64) 9888-8755", "https://www.linkedin.com/in/gh-457", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedor Junior", ["JavaScript", "Typescript", "Angular"]);
const canditado4 = new PessoaFisica("Josefina", "j@email.com", "(63) 9888-5555", "https://www.linkedin.com/in/josefina-457", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedora Sênior", ["Java", "Groovy", "Angular", "PostgreSQL", "Grails",]);
const canditado5 = new PessoaFisica("Gustavo", "g@email.com", "(61) 9888-5555", "https://www.linkedin.com/in/gus-457", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedora Pleno", ["Java", "Groovy", "Angular", "PostgreSQL", "JavaScript"]);
candidatos.push(canditado1, canditado2, canditado3, canditado4, canditado5);
//fechar modal
export function closeModal() {
    const modal = document.querySelector('.modal');
    var mod = bootstrap.Modal.getInstance(modal);
    mod.hide();
}
// //sessão de validação
// function cpfMask() {
//     if (cpf.value.length == 3 || cpf.value.length == 7) {
//         cpf.value += "."
//     } else if (cpf.value.length == 11) {
//         cpf.value += "-"
//     }
// }
//
// function validaDados(cpf) {
//
// }
//
// //validar CPF
// function validarCPF() {
//     let cpf_value = cpf.value;
//     if (typeof cpf_value !== "string") return false;
//     cpf_value = cpf_value.replace(/[\s.-]*/igm, '')
//     console.log(cpf_value)
// }
//Cadastro de Candidato
export function CadastraCandidato(e) {
    e.preventDefault();
    let skills = [];
    let checkboxes = document.querySelectorAll('.form-check-input');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            skills.push(checkbox.value);
        }
    }
    const candidato = new PessoaFisica(nome.value, email.value, telefone.value, linkdin.value, cpf.value, idade.value, pais.value, estado.value, cep.value, desc.value, skills);
    candidatos.push(candidato);
    document.getElementById('modal-form').reset();
    closeModal();
    console.log(candidatos);
}
//Listar Empresas
function listarEmpresas() {
    empresas.map(emp => {
        const nRow = document.createElement('tr');
        nRow.innerHTML = `
            <td>${emp.descricao}</td>
            <td>${emp.skills}</td>
            <td>
                <button class="btn btn-outline-success"> Curtir </button>
            </td>
        `;
        document.querySelector('#tbody').appendChild(nRow);
    });
}
// <HTMLSelectElement>document.getElementById('CpfInputC')?.addEventListener("keyup", cpfMask);
(_a = document.getElementById('listar-empresas')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", listarEmpresas);
(_b = document.getElementById('modal-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', CadastraCandidato);
