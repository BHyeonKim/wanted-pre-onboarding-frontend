import classNames from 'classnames/bind'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import { DataContext } from 'components/Context'
import { ChangeEvent, PropsWithChildren, useContext, useState } from 'react'
import todo from 'services/todo'
import { TodoObject } from 'types/todo'

import styles from './todoItem.module.scss'

type TodoItemProps = PropsWithChildren<TodoObject>

type Mode = 'visual' | 'insert'

const cx = classNames.bind(styles)

const TodoItem = ({ ...todoProps }: TodoItemProps) => {
  const [todoObject, setTodo] = useState(todoProps)
  const [mode, setMode] = useState<Mode>('visual')
  const dataContextValue = useContext(DataContext)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo((prev) => ({ ...prev, todo: e.currentTarget.value }))

  const handleDelete = async () => {
    await todo.deleteTodo(todoObject.id)
    dataContextValue?.setDataState('stale')
  }

  const handleMode = () => setMode((prev) => (prev === 'visual' ? 'insert' : 'visual'))

  const field =
    mode === 'visual' ? (
      <p>{todoObject.todo}</p>
    ) : (
      <input type="text" value={todoObject.todo} onChange={handleInput} />
    )

  const buttonText = mode === 'insert' ? '완료' : '수정'

  return (
    <li className={cx('todo')}>
      <div className={cx('contentWrapper')}>
        <Checkbox />
        {field}
      </div>
      <div className={cx('buttonWrapper')}>
        <Button className={cx('button', 'modify')} onClick={handleMode}>
          {buttonText}
        </Button>
        <Button className={cx('button', 'delete')} onClick={handleDelete}>
          삭제
        </Button>
      </div>
    </li>
  )
}
export default TodoItem
