import {PessoaFisica} from "./Classes/PessoaFisica.js";
import {empresas} from "./Empresa.js";

export const candidatos: Array<PessoaFisica> = new Array<PessoaFisica>();

let nome = <HTMLSelectElement>document.querySelector('#NomeInputC');
let email = <HTMLSelectElement>document.querySelector('#EmailInputC');
let telefone = <HTMLSelectElement>document.querySelector('#TelInputC');
let linkdin = <HTMLSelectElement>document.querySelector('#LinkInputC');
let cpf = <HTMLSelectElement>document.querySelector('#CpfInputC');
let idade = <HTMLSelectElement>document.querySelector('#IdadeInputC');
let estado = <HTMLSelectElement>document.querySelector('#EstadoInputC');
let cep = <HTMLSelectElement>document.querySelector('#CepInputC');
let pais = <HTMLSelectElement>document.querySelector('#PaisinputC');
let desc = <HTMLSelectElement>document.querySelector('#DescInputC');

const canditado1 = new PessoaFisica(
    "Eduardo",
    "e@email.com",
    "(61) 9888-5555",
    "https://www.linkedin.com/in/eduardo-457",
    "816.171.166-61",
    22, "Brasil",
    "DF",
    "72590-000",
    "Desenvolvedor Junior",
    ["Java", "Groovy", "Angular", "TypeScript"]
);
const canditado2 = new PessoaFisica(
    "Maria Alice",
    "maria.alice@email.com",
    "(62) 9888-5555",
    "https://www.linkedin.com/in/maria-897",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "PostgreSQL", "Python"]
);
const canditado3 = new PessoaFisica(
    "Gabriel Fernandes",
    "maria.alice@email.com",
    "(64) 9888-8755",
    "https://www.linkedin.com/in/gh-457",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedor Junior",
    ["JavaScript", "Typescript", "Angular"]
);
const canditado4 = new PessoaFisica(
    "Josefina",
    "j@email.com",
    "(63) 9888-5555",
    "https://www.linkedin.com/in/josefina-457",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Sênior",
    ["Java", "Groovy", "Angular", "PostgreSQL", "Grails",]
);
const canditado5 = new PessoaFisica(
    "Gustavo",
    "g@email.com",
    "(61) 9888-5555",
    "https://www.linkedin.com/in/gus-457",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "Angular", "PostgreSQL", "JavaScript"]
);

candidatos.push(canditado1, canditado2, canditado3, canditado4, canditado5);


//fechar modal
export function closeModal() {
    const modal = <HTMLSelectElement>document.querySelector('.modal');
    var mod = bootstrap.Modal.getInstance(modal)
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
    e.preventDefault()
    let skills = [];
    let checkboxes = document.querySelectorAll('.form-check-input')
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            skills.push(checkbox.value)
        }
    }
    const candidato = new PessoaFisica(
        nome.value,
        email.value,
        telefone.value,
        linkdin.value,
        cpf.value,
        idade.value,
        pais.value,
        estado.value,
        cep.value,
        desc.value,
        skills
    );
    candidatos.push(candidato);
    document.getElementById('modal-form').reset()
    closeModal()
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
    })
}

// <HTMLSelectElement>document.getElementById('CpfInputC')?.addEventListener("keyup", cpfMask);
<HTMLSelectElement>document.getElementById('listar-empresas')?.addEventListener("click", listarEmpresas);
<HTMLSelectElement>document.getElementById('modal-form')?.addEventListener('submit', CadastraCandidato);