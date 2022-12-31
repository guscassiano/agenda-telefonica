const form = document.getElementById("form-id")
let contatos = []
let numero = []
let linhas = ""

form.addEventListener("reset", function(contatos,numero){
    contatos = contatos.pop()
    numero = numero.pop()
    alert("Último contato removido")
    return contatos, numero
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    CadastraContato()
    atualizaAgenda()
})

function CadastraContato(){
    const nomeContato = document.getElementById("nome-contato")
    const numeroTelefone = document.getElementById("numero-telefone")

    if(numero.includes(numeroTelefone.value)){
        alert(`Número ${numeroTelefone.value} já adiconado`)
    } else if (contatos.includes(nomeContato.value)){
        alert(`Contato ${nomeContato.value} já adiconado`)
    } else {
        let linha = '<tr>'
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${numeroTelefone.value}</td>`
        linha += '</tr>'

        linhas += linha

        contatos.push(nomeContato.value)
        numero.push(numeroTelefone.value)
    }

    nomeContato.value = ''
    numeroTelefone.value = ''
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas
}