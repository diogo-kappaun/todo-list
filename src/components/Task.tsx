import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

import Button from './Button'
import Checkbox from './Checkbox'

interface DataProps {
  id: number
  isDone: boolean
  description: string
}

interface TaskProps {
  data: DataProps
  onDelete: () => void
}

const Task = ({ onDelete, data }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(data.isDone)

  function handleChange() {
    setIsChecked((prevState) => !prevState)
  }

  return (
    <div className="bord flex w-full justify-between gap-3 rounded-lg border border-base-gray-400 bg-base-gray-500 p-4">
      <div className="flex gap-3">
        <Checkbox checked={isChecked} onChange={handleChange} />
        <p
          className={`select-none ${isChecked ? 'text-base-gray-300 line-through' : ''}`}
        >
          {data.description}
        </p>
      </div>
      <Button onClick={onDelete} variant="secondary">
        <Trash size={20} weight="bold" />
      </Button>
    </div>
  )
}

export default Task
