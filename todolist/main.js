const formularioAdicionar = document.querySelector("#adicionar-form")
const inputAdicionar = document.querySelector("#input-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")
const formularioEditar = document.querySelector("#editar-form")
const inputEditar = document.querySelector("#input-editar")
const botaoCancelarEdit = document.querySelector("#cancelar-edit")

function salvarTarefa(inputValue){
    const tarefa = document.createElement("div")
    tarefa.classList.add("tarefas")

    const tarefaTexto = document.createElement("h3")
    tarefaTexto.innerText = inputValue

    const btnFeito = document.createElement("button")
    btnFeito.classList.add("tarefa-feita")
    btnFeito.innerHTML = '<i class="fa-solid fa-check"></i>'
    
    const btnEditar = document.createElement("button")
    btnEditar.classList.add("tarefa-editar")
    btnEditar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    
    const btnDeletar = document.createElement("button")
    btnDeletar.classList.add("tarefa-remover")
    btnDeletar.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    
    tarefa.appendChild(tarefaTexto)
    tarefa.appendChild(btnFeito)
    tarefa.appendChild(btnEditar)
    tarefa.appendChild(btnDeletar)

    listaTarefas.appendChild(tarefa)
    inputAdicionar.value = ''
    inputAdicionar.focus()
}

function trocarFormularios(){
    formularioEditar.classList.toggle("esconder")
    formularioAdicionar.classList.toggle("esconder")
    listaTarefas.classList.toggle("esconder")
}

function editarTarefa(inputnovo){
    const todos = document.querySelectorAll(".tarefas")

    todos.forEach((tarefa) =>{
        let textoTarefa = tarefa.querySelector("h3")

        if(textoTarefa.innerText === inputAtual){
            textoTarefa.innerHTML = inputnovo
        }
    })
}


formularioAdicionar.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = inputAdicionar.value

    if(inputValue){
        salvarTarefa(inputValue)
    }
})

document.addEventListener("click", e => {
    const elemento = e.target
    const elementoPai = elemento.closest("div")
    let textoTarefa;

    if(elementoPai && elementoPai.querySelector("h3")){
        textoTarefa = elementoPai.querySelector("h3").innerText
    }

    if(elemento.classList.contains("tarefa-feita")){
        elementoPai.classList.toggle("feito")
    }

    if(elemento.classList.contains("tarefa-remover")){
        elementoPai.remove()
    }

    if(elemento.classList.contains("tarefa-editar")){
        trocarFormularios()
        inputEditar.value = textoTarefa
        inputAtual = textoTarefa
    }
})

botaoCancelarEdit.addEventListener("click", e => {
    e.preventDefault()

    trocarFormularios()
})

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = inputEditar.value

    if(editInputValue){
        editarTarefa(editInputValue)
    }

    trocarFormularios()
})