import {PessoaFisica} from "./Classes/PessoaFisica.js";

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
    ["Java", "Groovy", "Angular"]
    );
const canditado2 = new PessoaFisica(
    "Maria Alice",
    "maria.alice@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "Angular", "PostGress"]
);
const canditado3 = new PessoaFisica(
    "Maria Alice",
    "maria.alice@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "Angular", "PostGress"]
);
const canditado4 = new PessoaFisica(
    "Maria Alice",
    "maria.alice@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "Angular", "PostGress"]
);
const canditado5 = new PessoaFisica(
    "Maria Alice",
    "maria.alice@email.com",
    "361.204.631-43",
    22, "Brasil",
    "GO",
    "72590-000",
    "Desenvolvedora Pleno",
    ["Java", "Groovy", "Angular", "PostGress"]
);

candidatos.push(canditado1, canditado2,canditado3,canditado4,canditado5);

export function CadastraCandidato(e) {
    e.preventDefault()
    let skills = [];
    if (checkPython.checked) skills.push("Python");
    if (checkJava.checked) skills.push("Java");
    if (checkJS.checked) skills.push("Javascript");
    if (checkTS.checked) skills.push("Typescript");
    if (checkGroovy.checked) skills.push("Groovy");
    if (checkGrails.checked) skills.push("Grails");
    if (checkAngular.checked) skills.push("Angular");
    if (checkPost.checked) skills.push("PostGress");

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




<HTMLSelectElement>document.getElementById('modal-form')?.addEventListener('submit', CadastraCandidato)