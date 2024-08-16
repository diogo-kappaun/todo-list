import { ClipboardText, PlusCircle } from '@phosphor-icons/react'
import { FormEvent, useEffect, useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import Task, { DataType } from './components/Task'

import Logo from './assets/Logo.svg'

const App = () => {
  const [data, setData] = useState<DataType[]>([])
  const [newTask, setNewTask] = useState('')

  const doneTask = data.filter((item) => item.isDone === true)

  function handleDelete(id: number) {
    const taskDeleted = data.filter((item) => item.id !== id)

    setData(taskDeleted)

    localStorage.setItem('@todo-data', JSON.stringify(taskDeleted))
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    if (newTask.length < 3) {
      return alert('Tarefa não valida!')
    }

    const taskAdded = {
      id: Math.random() * 10,
      description: newTask,
      isDone: false,
    }

    setData((prevState) => [...prevState, taskAdded])

    localStorage.setItem('@todo-data', JSON.stringify([...data, taskAdded]))

    setNewTask('')
  }

  function updateData(newTask: DataType) {
    const newData = data.map((item) => {
      if (item.id === newTask.id) {
        return newTask
      }

      return item
    })

    localStorage.setItem('@todo-data', JSON.stringify(newData))

    setData(newData)
  }

  useEffect(() => {
    const loadData = localStorage.getItem('@todo-data')

    setData(JSON.parse(loadData!))
  }, [])

  return (
    <div className="mx-auto max-w-[1120px] p-8">
      <img src={Logo} alt="Logo" className="px-4" />
      <main className="space-y-8 p-4">
        <form className="flex space-x-4">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <Button onClick={handleNewTask}>
            Criar <PlusCircle size={20} weight="bold" />
          </Button>
        </form>

        <div className="flex flex-wrap justify-between gap-4 text-sm font-bold">
          <span className="text-product-blue-normal">
            Tarefas criadas{' '}
            <span className="rounded-full bg-base-gray-500 px-2 py-0.5 text-xs text-base-gray-100">
              {data.length}
            </span>
          </span>

          <span className="text-product-purple-normal">
            Concluídas{' '}
            <span className="rounded-full bg-base-gray-500 px-2 py-0.5 text-xs text-base-gray-100">
              {`${doneTask.length} de ${data.length}`}
            </span>
          </span>
        </div>

        <div className="space-y-2">
          {data.length > 0 ? (
            data.map((task) => (
              <Task
                key={task.id}
                data={task}
                onDelete={() => handleDelete(task.id)}
                updateData={updateData}
              />
            ))
          ) : (
            <div className="flex flex-col items-center text-center text-base-gray-300">
              <ClipboardText size={64} className="mb-2 text-base-gray-400" />
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
