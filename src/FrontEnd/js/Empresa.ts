import {PessoaJuridica} from "./Classes/PessoaJuridica.js";
import {CadastraCandidato, candidatos} from "./Candidato.js";


export const empresas: Array<PessoaJuridica> = new Array<PessoaJuridica>();

let nome = <HTMLSelectElement>document.querySelector('#NomeInput');
let email = <HTMLSelectElement>document.querySelector('#EmailInput');
let cnpj = <HTMLSelectElement>document.querySelector('#CnpjInput');
let estado = <HTMLSelectElement>document.querySelector('#EstadoInput');
let cep = <HTMLSelectElement>document.querySelector('#CepInput');
let pais = <HTMLSelectElement>document.querySelector('#Paisinput');
let desc = <HTMLSelectElement>document.querySelector('#DescInput');

//Checkboxes
let checkPython = document.querySelector('#CheckPythonEmpresas');
let checkJava = document.querySelector('#CheckJavaEmpresas');
let checkJS = document.querySelector('#CheckJSEmpresas');
let checkTS = document.querySelector('#CheckTSEmpresas');
let checkGroovy = document.querySelector('#CheckGroovyEmpresas');
let checkGrails = document.querySelector('#CheckGrailsEmpresas');
let checkAngular = document.querySelector('#CheckAngularEmpresas');
let checkPost = document.querySelector('#CheckPostEmpresas');


const empresa1 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java","Groovy","Angular"]
);
const empresa2 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java","Groovy","Angular"]
);
const empresa3 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java","Groovy","Angular"]
);
const empresa4 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java","Groovy","Angular"]
);
const empresa5 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java","Groovy","Angular"]
);

empresas.push(empresa1,empresa2,empresa3,empresa4,empresa5);

function CadastrarEmpresa(e){
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


    const empresa = new PessoaJuridica(
        nome.value,
        email.value,
        cnpj.value,
        estado.value,
        pais.value,
        cep.value,
        desc.value,
        skills
    )

    empresas.push(empresa)
    document.getElementById('modal-form').reset()
    console.log(empresas)

}


function listarCandidatos(){
    console.log(candidatos)
    candidatos.map(cand => {
        const nRow = document.createElement('tr');
        nRow.innerHTML =`
            <td>${cand.descricao}</td>
            <td>${cand.skills}</td>
            <td>
                <button class="btn btn-outline-success"> Curtir </button>
            </td>
        `;
        document.querySelector('#tbody').appendChild(nRow);
    })

}





//Eventos
window.addEventListener("load", listarCandidatos)
<HTMLSelectElement>document.getElementById('modal-form')?.addEventListener('submit', CadastrarEmpresa)