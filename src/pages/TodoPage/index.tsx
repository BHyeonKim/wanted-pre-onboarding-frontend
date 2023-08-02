import classNames from 'classnames/bind'
import Fetcher from 'components/Fetcher'
import TodoInput from 'components/TodoInput'
import TodoList from 'components/TodoList'

import styles from './todo.module.scss'

const cx = classNames.bind(styles)

const TodoPage = () => {
  return (
    <div className={cx('page')}>
      <Fetcher>
        <TodoList />
      </Fetcher>
      <TodoInput />
    </div>
  )
}
export default TodoPage
