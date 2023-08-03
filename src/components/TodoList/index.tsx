import classNames from 'classnames/bind'
import TodoItem from 'components/TodoItem'
import type { TodoObject } from 'types/todo'

import styles from './todoList.module.scss'

export interface TodoListProps {
  todos?: TodoObject[]
}

const cx = classNames.bind(styles)

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className={cx('todoList')}>
      {todos?.map((todo, index) => {
        const key = `${index}-${todo.id}`
        return <TodoItem key={key} todoItem={todo} />
      })}
    </ul>
  )
}

export default TodoList
