import classNames from 'classnames/bind'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import { DataStateContext } from 'components/Context'
import { ChangeEvent, useContext, useState } from 'react'
import todoApi from 'services/todo'
import { TodoObject } from 'types/todo'

import styles from './todoItem.module.scss'

type Mode = 'visual' | 'insert'

interface TodoItemProps {
  todoItem: TodoObject
}

const cx = classNames.bind(styles)

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const [todo, setTodo] = useState(todoItem.todo)
  const [mode, setMode] = useState<Mode>('visual')
  const [isChecked, setIsChecked] = useState(todoItem.isCompleted)
  const dataContextValue = useContext(DataStateContext)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value)
  }

  const handleDelete = async () => {
    await todoApi.deleteTodo(todoItem.id)
    dataContextValue?.setDataState('stale')
  }

  const handleCancel = () => {
    setMode('visual')
    setTodo(todoItem.todo)
  }

  const handleInsert = () => setMode('insert')

  const handleCheck = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked)
    await todoApi.updateTodo(todoItem.id, todo, isChecked)
    dataContextValue?.setDataState('stale')
  }

  const handleSubmit = async () => {
    await todoApi.updateTodo(todoItem.id, todo, isChecked)
    dataContextValue?.setDataState('stale')
    setMode('visual')
  }

  const field =
    mode === 'visual' ? (
      <p>{todo}</p>
    ) : (
      <input data-testid="modify-input" type="text" value={todo} onChange={handleInput} />
    )

  const submitButton = (
    <Button
      className={cx('button', 'complete')}
      data-testid={'submit-button'}
      disabled={!todo}
      onClick={handleSubmit}
    >
      완료
    </Button>
  )

  const insertButton = (
    <Button
      className={cx('button', 'modify')}
      data-testid={'modify-button'}
      onClick={handleInsert}
    >
      수정
    </Button>
  )

  const cancelButton = (
    <Button
      className={cx('button', 'delete')}
      data-testid={'cancel-button'}
      onClick={handleCancel}
    >
      취소
    </Button>
  )

  const deleteButton = (
    <Button
      className={cx('button', 'delete')}
      data-testid={'delete-button'}
      onClick={handleDelete}
    >
      삭제
    </Button>
  )

  return (
    <li className={cx('todo', { active: mode === 'insert' })}>
      <div className={cx('contentWrapper')}>
        <Checkbox checked={todoItem.isCompleted} onChange={handleCheck} />
        {field}
      </div>
      <div className={cx('buttonWrapper')}>
        {mode === 'insert' ? submitButton : insertButton}
        {mode === 'insert' ? cancelButton : deleteButton}
      </div>
    </li>
  )
}
export default TodoItem
