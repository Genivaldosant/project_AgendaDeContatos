const form = document.getElementById('form');
const inputNomeContato = document.getElementById('nome-contato');
const inputNúmeroTelefone = document.getElementById('número-telefone');
const msgDeError = '<span class="errorMsg">O número informado está incorreto</span>'
const nomes = [];
const telefones = [];


form.addEventListener('submit', function(event){
    event.preventDefault();
})

inputNúmeroTelefone.addEventListener('change', function(event){
    const confirmaNúmero = event.target.value;
    
    if (confirmaNúmero.length < 10 || confirmaNúmero.length > 10) {
        inputNúmeroTelefone.classList.add('errorInput');
        document.getElementById('error').innerHTML = msgDeError;
    } else {
        inputNúmeroTelefone.classList.remove('errorInput');
        document.getElementById('error').innerHTML = '';

        atualizaLinha()
    }
})

function atualizaLinha(){
    adicionaLinha()
    document.querySelector('tbody').innerHTML = linha
}

let linha = '';
function adicionaLinha(){
    if (nomes.includes(inputNomeContato.value) || telefones.includes(inputNúmeroTelefone.value)) {
        alert('O número ou nome de contato já constam na sua lista de contatos.')
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputNúmeroTelefone.value)

        linha += '<tr>';
        linha += '<td><img src="./img/foto-perfil.png"/></td>'
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputNúmeroTelefone.value}</td>`;
        linha += '</tr>';

        inputNomeContato.value = '';
        inputNúmeroTelefone.value = '';
    }
}

