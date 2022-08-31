var _a;
import { PessoaFisica } from "./Classes/PessoaFisica.js";
export const candidatos = new Array();
let nome = document.querySelector('#NomeInputC');
let email = document.querySelector('#EmailInputC');
let cpf = document.querySelector('#CpfInputC');
let idade = document.querySelector('#IdadeInputC');
let estado = document.querySelector('#EstadoInputC');
let cep = document.querySelector('#CepInputC');
let pais = document.querySelector('#PaisinputC');
let desc = document.querySelector('#DescInputC');
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
const canditado1 = new PessoaFisica("Eduardo", "e@email.com", "816.171.166-61", 22, "Brasil", "GO", "72590-000", "Desenvolvedor Junior", ["Java", "Groovy", "Angular"]);
const canditado2 = new PessoaFisica("Maria Alice", "maria.alice@email.com", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedora Pleno", ["Java", "Groovy", "Angular", "PostGress"]);
const canditado3 = new PessoaFisica("Gabriel Fernandes", "maria.alice@email.com", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedor Junior", ["Javascript", "Typescript"]);
const canditado4 = new PessoaFisica("Josefina", "j@email.com", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedora Sênior", ["Java", "Groovy", "Angular", "PostGress", "Grails",]);
const canditado5 = new PessoaFisica("Gustavo", "g@email.com", "361.204.631-43", 22, "Brasil", "GO", "72590-000", "Desenvolvedora Pleno", ["Java", "Groovy", "Angular", "PostGress", "Javascript"]);
candidatos.push(canditado1, canditado2, canditado3, canditado4, canditado5);
export function CadastraCandidato(e) {
    e.preventDefault();
    let skills = [];
    if (checkPython.checked)
        skills.push("Python");
    if (checkJava.checked)
        skills.push("Java");
    if (checkJS.checked)
        skills.push("Javascript");
    if (checkTS.checked)
        skills.push("Typescript");
    if (checkGroovy.checked)
        skills.push("Groovy");
    if (checkGrails.checked)
        skills.push("Grails");
    if (checkAngular.checked)
        skills.push("Angular");
    if (checkPost.checked)
        skills.push("PostGress");
    const candidato = new PessoaFisica(nome.value, email.value, cpf.value, idade.value, pais.value, estado.value, cep.value, desc.value, skills);
    candidatos.push(candidato);
    document.getElementById('modal-form').reset();
    console.log(candidatos);
}
(_a = document.getElementById('modal-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', CadastraCandidato);
