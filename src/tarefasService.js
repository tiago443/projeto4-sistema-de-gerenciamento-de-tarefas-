function adicionarTarefa(lista, descricao) {
  if (!descricao || descricao.trim() === "") return lista

  return [
    ...lista,
    {
      descricao: descricao.trim(),
      concluida: false
    }
  ]
}

function concluirTarefa(lista, indice) {
  if (!lista[indice]) return lista

  return lista.map((tarefa, posicao) => {
    if (posicao === indice) {
      return {
        ...tarefa,
        concluida: true
      }
    }

    return tarefa
  })
}

function excluirTarefa(lista, indice) {
  return lista.filter((_, posicao) => posicao !== indice)
}

module.exports = {
  adicionarTarefa,
  concluirTarefa,
  excluirTarefa
}
