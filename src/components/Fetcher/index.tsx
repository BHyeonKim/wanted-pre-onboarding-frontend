import type { TodoListProps } from 'components/TodoList'
import { cloneElement, ReactElement, useCallback, useEffect, useState } from 'react'
import todo from 'services/todo'
import type { TodoObject } from 'types/todo'

interface FetcherProps {
  children: ReactElement<TodoListProps>
}

const Fetcher = ({ children }: FetcherProps) => {
  const [todoData, setTodoData] = useState<TodoObject[]>()

  const fetchTodos = useCallback(async () => {
    const { data } = await todo.getTodos()
    setTodoData(data)
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return cloneElement(children, {
    todos: todoData,
  })
}

export default Fetcher
