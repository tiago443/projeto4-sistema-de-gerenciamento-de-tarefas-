const {
  adicionarTarefa,
  concluirTarefa,
  excluirTarefa
} = require("../src/tarefasService")

test("adiciona tarefa valida", () => {
  const lista = adicionarTarefa([], "Estudar JavaScript")

  expect(lista.length).toBe(1)
  expect(lista[0].descricao).toBe("Estudar JavaScript")
  expect(lista[0].concluida).toBe(false)
})

test("nao adiciona tarefa vazia", () => {
  const lista = adicionarTarefa([], "")

  expect(lista.length).toBe(0)
})

test("conclui tarefa", () => {
  const lista = adicionarTarefa([], "Fazer atividade")
  const resultado = concluirTarefa(lista, 0)

  expect(resultado[0].concluida).toBe(true)
})

test("exclui tarefa", () => {
  const lista = adicionarTarefa([], "Apagar depois")
  const resultado = excluirTarefa(lista, 0)

  expect(resultado.length).toBe(0)
})
