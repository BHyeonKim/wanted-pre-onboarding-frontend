import classNames from 'classnames/bind'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import { DataContext } from 'components/Context'
import { ChangeEvent, useContext, useRef, useState } from 'react'
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
  const checkboxRef = useRef<HTMLInputElement>(null)
  const dataContextValue = useContext(DataContext)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value)
  }
  const handleDelete = async () => {
    if (mode === 'insert') {
      setMode('visual')
      setTodo(todoItem.todo)
      return
    }
    await todoApi.deleteTodo(todoItem.id)
    dataContextValue?.setDataState('stale')
  }

  const handleMode = async () => {
    if (mode === 'insert') {
      await todoApi.updateTodo(
        todoItem.id,
        todo,
        checkboxRef.current?.checked ?? todoItem.isCompleted,
      )
      dataContextValue?.setDataState('stale')
    }
    setMode((prev) => (prev === 'visual' ? 'insert' : 'visual'))
  }

  const field =
    mode === 'visual' ? (
      <p>{todo}</p>
    ) : (
      <input type="text" value={todo} onChange={handleInput} />
    )

  const primaryButtonText = mode === 'insert' ? '완료' : '수정'

  const secondaryButtonText = mode === 'insert' ? '취소' : '삭제'

  return (
    <li className={cx('todo')}>
      <div className={cx('contentWrapper')}>
        <Checkbox
          checked={todoItem.isCompleted}
          disabled={mode === 'visual'}
          ref={checkboxRef}
        />
        {field}
      </div>
      <div className={cx('buttonWrapper')}>
        <Button
          className={cx('button', 'modify')}
          data-testid={mode === 'insert' ? 'submit-button' : 'modify-button'}
          onClick={handleMode}
        >
          {primaryButtonText}
        </Button>
        <Button
          className={cx('button', 'delete')}
          data-testid={mode === 'insert' ? 'cancel-button' : 'delete-button'}
          onClick={handleDelete}
        >
          {secondaryButtonText}
        </Button>
      </div>
    </li>
  )
}
export default TodoItem
