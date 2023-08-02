import { DataContext } from 'components/Context'
import type { TodoListProps } from 'components/TodoList'
import {
  cloneElement,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import todo from 'services/todo'
import type { TodoObject } from 'types/todo'

interface FetcherProps {
  children: ReactElement<TodoListProps>
}

const Fetcher = ({ children }: FetcherProps) => {
  const [todoData, setTodoData] = useState<TodoObject[]>()
  const dataContextValue = useContext(DataContext)

  const fetchTodos = useCallback(async () => {
    const { data } = await todo.getTodos()
    setTodoData(data)
  }, [])

  useEffect(() => {
    if (dataContextValue?.dataState === 'stale') fetchTodos()
    dataContextValue?.setDataState('fresh')
  }, [dataContextValue, dataContextValue?.dataState, fetchTodos])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return cloneElement(children, {
    todos: todoData,
  })
}

export default Fetcher
