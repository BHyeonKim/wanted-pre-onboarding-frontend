import classNames from 'classnames/bind'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import { ChangeEvent, useState } from 'react'

import styles from './todoItem.module.scss'

interface TodoItemProps {
  todo?: string
}

type Mode = 'visual' | 'insert'

const cx = classNames.bind(styles)

const TodoItem = ({ todo = 'Nulla excepteur ullamco do csaf' }: TodoItemProps) => {
  const [input, setInput] = useState(todo)
  const [mode, setMode] = useState<Mode>('visual')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value)

  const handleMode = () => setMode((prev) => (prev === 'visual' ? 'insert' : 'visual'))

  const field =
    mode === 'visual' ? (
      <p>{input}</p>
    ) : (
      <input type="text" value={input} onChange={handleInput} />
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
        <Button className={cx('button', 'delete')}>삭제</Button>
      </div>
    </li>
  )
}
export default TodoItem
