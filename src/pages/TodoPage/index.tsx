import classNames from 'classnames/bind'
import TodoInput from 'components/TodoInput'
import TodoItem from 'components/TodoItem'

import styles from './todo.module.scss'

const cx = classNames.bind(styles)

const TodoPage = () => {
  return (
    <div className={cx('page')}>
      <ul>
        <TodoItem />
      </ul>
      <TodoInput />
    </div>
  )
}
export default TodoPage
