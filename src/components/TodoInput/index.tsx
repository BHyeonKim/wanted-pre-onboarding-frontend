import classNames from 'classnames/bind'
import { ChangeEvent, FormEvent, useState } from 'react'
import todo from 'services/todo'

import styles from './todoInput.module.scss'

const cx = classNames.bind(styles)

const TodoInput = () => {
  const [input, setInput] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await todo.createTodo(input)
    setInput('')
  }

  return (
    <div className={cx('inputWrapper')}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">제출</button>
      </form>
    </div>
  )
}

export default TodoInput
