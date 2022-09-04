import {PessoaJuridica} from "./Classes/PessoaJuridica.js";
import {candidatos, closeModal} from "./Candidato.js";

export const empresas: Array<PessoaJuridica> = new Array<PessoaJuridica>();

let nome = <HTMLSelectElement>document.querySelector('#NomeInput');
let email = <HTMLSelectElement>document.querySelector('#EmailInput');
let cnpj = <HTMLSelectElement>document.querySelector('#CnpjInput');
let estado = <HTMLSelectElement>document.querySelector('#EstadoInput');
let cep = <HTMLSelectElement>document.querySelector('#CepInput');
let pais = <HTMLSelectElement>document.querySelector('#Paisinput');
let desc = <HTMLSelectElement>document.querySelector('#DescInput');

const empresa1 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java", "Groovy", "Angular"]
);
const empresa2 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java", "Groovy", "Angular"]
);
const empresa3 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java", "Groovy", "Angular"]
);
const empresa4 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java", "Groovy", "Angular"]
);
const empresa5 = new PessoaJuridica(
    "Google",
    "g@email.com",
    "23.982.275/0001-73",
    "Estados Unidos",
    "CA",
    "0021548-548",
    "Empresa de Busca",
    ["Java", "Groovy", "Angular"]
);

empresas.push(empresa1, empresa2, empresa3, empresa4, empresa5);

function CadastrarEmpresa(e) {
    e.preventDefault()
    let skills = [];
    let checkboxes = document.querySelectorAll('.form-check-input')
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            skills.push(checkbox.value)
        }
    }

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
    closeModal()
    console.log(empresas)

}


function listarCandidatos() {
    candidatos.map(cand => {
        const nRow = document.createElement('tr');
        nRow.innerHTML = `
            <td>${cand.descricao}</td>
            <td>${cand.skills}</td>
            <td>
                <button class="btn btn-outline-success"> Curtir </button>
            </td>
        `;
        document.querySelector('#tbody').appendChild(nRow);
    })

}

//Gráfico
function montarArray(){
    let qntdSkills = []

    const skills = [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "Groovy",
        "Grails",
        "Angular",
        "PostgreSQL"
    ]

    for (var i = 0; i < skills.length; i++) {
        for (var j = 0; j < candidatos.length; j++) {

            if (candidatos[j].skills.includes(skills[i])) {

                let encontrouSkill = false
                for (var k = 0; k < qntdSkills.length; k++) {

                    if (skills[i] === qntdSkills[k].skill) {

                        encontrouSkill = true;

                        qntdSkills[k].qntd += 1
                        break;
                    }

                }
                if (!encontrouSkill) {

                    qntdSkills.push({
                        skill: skills[i],
                        qntd: 1
                    })
                }

            }
        }
    }

    qntdSkills.sort(function (a, b) {
        var keyA = a.skill,
            keyB = b.skill;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    return qntdSkills
}

function gerarGrafico() {
    let ctx = <HTMLSelectElement>document.querySelector('#myChart');
    let qntdSkills = montarArray()


    const skillsLabel = qntdSkills.map(i => i.skill)
    const skillsQnt = qntdSkills.map(i => i.qntd)

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: skillsLabel,
            datasets: [{
                label: 'Competências',
                data: skillsQnt,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgb(246,176,110, 0.8)',
                    'rgba(94,151,182,0.8)',
                    'rgba(238,135,11,0.8)',
                    'rgb(239,216,29, 0.8)',
                    'rgb(47,116,192, 0.8)',
                    'rgba(0,26,47,0.8)',
                    'rgb(119,123,179, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(246,176,110, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgb(240,147,28, 1)',
                    'rgb(239,216,29, 1)',
                    'rgb(47,116,192,1)',
                    'rgba(0,26,47,1)',
                    'rgb(119,123,179, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

//Eventos
<HTMLSelectElement> document.getElementById('gerar-grafico')?.addEventListener('click',gerarGrafico)
 <HTMLSelectElement> document.getElementById('listar-candidatos')?.addEventListener('click',listarCandidatos)
<HTMLSelectElement > document.getElementById('modal-form')?.addEventListener('submit', CadastrarEmpresa)