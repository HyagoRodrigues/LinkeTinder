import {PessoaFisica} from "./Classes/PessoaFisica.js";
import {empresas} from "./Empresa.js";

export const candidatos: Array<PessoaFisica> = new Array<PessoaFisica>();

let nome = <HTMLSelectElement>document.querySelector('#NomeInputC');
let email = <HTMLSelectElement>document.querySelector('#EmailInputC');
let cpf = <HTMLSelectElement>document.querySelector('#CpfInputC');
let idade = <HTMLSelectElement>document.querySelector('#IdadeInputC');
let estado = <HTMLSelectElement>document.querySelector('#EstadoInputC');
let cep = <HTMLSelectElement>document.querySelector('#CepInputC');
let pais = <HTMLSelectElement>document.querySelector('#PaisinputC');
let desc = <HTMLSelectElement>document.querySelector('#DescInputC');
// const checkboxes = <HTMLSelectElement>document.querySelectorAll('.form-check-input')
//
//     for(let checkbox of checkboxes){
//         checkbox.addEventListener('click', function (){
//             if(checkbox.checked){
//                 skills.push(checkbox.value)

let checkPython = document.querySelector('#CheckPython');
let checkJava = document.querySelector('#CheckJava');
let checkJS = document.querySelector('#CheckJS');
let checkTS = document.querySelector('#CheckTS');
let checkGroovy = document.querySelector('#CheckGroovy');
let checkGrails = document.querySelector('#CheckGrails');
let checkAngular = document.querySelector('#CheckAngular');
let checkPost = document.querySelector('#CheckPost');


const canditado1 = new PessoaFisica(
    "Eduardo",
    "e@email.com",
    "816.171.166-61",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedor Junior",
    ["Java", "Groovy", "Angular", "TypeScript"]
    );
const canditado2 = new PessoaFisica(
    "Maria Alice",
    "maria.alice@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy",  "PostgreSQL","Python"]
);
const canditado3 = new PessoaFisica(
    "Gabriel Fernandes",
    "maria.alice@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedor Junior",
    ["JavaScript", "Typescript","Angular"]
);
const canditado4 = new PessoaFisica(
    "Josefina",
    "j@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Sênior",
    ["Java", "Groovy", "Angular", "PostgreSQL", "Grails", ]
);
const canditado5 = new PessoaFisica(
    "Gustavo",
    "g@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "Angular", "PostgreSQL", "JavaScript"]
);

candidatos.push(canditado1, canditado2,canditado3,canditado4,canditado5);

export function CadastraCandidato(e) {
    e.preventDefault()
    let skills = [];
    if (checkPython.checked) skills.push("Python");
    if (checkJava.checked) skills.push("Java");
    if (checkJS.checked) skills.push("JavaScript");
    if (checkTS.checked) skills.push("TypeScript");
    if (checkGroovy.checked) skills.push("Groovy");
    if (checkGrails.checked) skills.push("Grails");
    if (checkAngular.checked) skills.push("Angular");
    if (checkPost.checked) skills.push("PostgreSQL");

    const candidato = new PessoaFisica(
        nome.value,
        email.value,
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
    console.log(candidatos);
}

function listarEmpresas(){
    empresas.map(emp => {
        const nRow = document.createElement('tr');
        nRow.innerHTML =`
            <td>${emp.descricao}</td>
            <td>${emp.skills}</td>
            <td>
                <button class="btn btn-outline-success"> Curtir </button>
            </td>
        `;
        document.querySelector('#tbody').appendChild(nRow);
    })
}



<HTMLSelectElement>document.getElementById('listar-empresas')?.addEventListener("click", listarEmpresas)
<HTMLSelectElement>document.getElementById('modal-form')?.addEventListener('submit', CadastraCandidato)