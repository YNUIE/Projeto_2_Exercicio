const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value;
}

const form = document.getElementById('form-contato');
const imgTelefone = '<img src="./images/telefone_icone.png" alt="Telefone">';
const imgEditar = '<img src="./images/editar.png" alt="Editar">';
const contatos = [];
const celular = [];


let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaNumContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputCelContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`Contato: ${inputNomeContato.value} já foi inserido`);
    } else {

        contatos.push(inputNomeContato.value);
        celular.push(parseFloat(inputCelContato.value));
        


        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputCelContato.value}</td>`;
        linha += `<td>${imgTelefone} ${imgEditar}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputCelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaNumContatos() {
    const qtdCel = celular.length;

    document.getElementById('quantidade-contatos').innerHTML = qtdCel;
}
