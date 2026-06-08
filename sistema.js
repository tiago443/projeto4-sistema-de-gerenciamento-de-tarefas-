const campo = document.getElementById("campoTarefa")
const botao = document.getElementById("btnAdicionar")
const listaVisual = document.getElementById("listaTarefas")

const total = document.getElementById("total")
const pendentes = document.getElementById("pendentes")
const concluidas = document.getElementById("concluidas")

let tarefas = []

function desenharTela() {
  listaVisual.innerHTML = ""

  tarefas.forEach((tarefa, indice) => {
    const item = document.createElement("li")

    item.innerHTML = `
      <div class="esquerda">
        <input 
          type="checkbox"
          ${tarefa.concluida ? "checked" : ""}
          onchange="alternarConclusao(${indice})"
        >

        <span class="nome ${tarefa.concluida ? "riscada" : ""}">
          ${tarefa.descricao}
        </span>
      </div>

      <div class="direita">
        <span class="status ${tarefa.concluida ? "concluida" : "pendente"}">
          ${tarefa.concluida ? "Concluída" : "Pendente"}
        </span>

        <button class="excluir" onclick="removerTarefa(${indice})">🗑</button>
      </div>
    `

    listaVisual.appendChild(item)
  })

  const feitas = tarefas.filter(tarefa => tarefa.concluida).length

  total.textContent = tarefas.length
  concluidas.textContent = feitas
  pendentes.textContent = tarefas.length - feitas
}

function adicionarNovaTarefa() {
  const texto = campo.value.trim()

  if (texto === "") {
    alert("Digite uma tarefa.")
    return
  }

  tarefas.push({
    descricao: texto,
    concluida: false
  })

  campo.value = ""
  desenharTela()
}

function alternarConclusao(indice) {
  tarefas[indice].concluida = !tarefas[indice].concluida
  desenharTela()
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1)
  desenharTela()
}

botao.addEventListener("click", adicionarNovaTarefa)

campo.addEventListener("keydown", evento => {
  if (evento.key === "Enter") adicionarNovaTarefa()
})
