import type { AxiosError } from 'axios'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'

type ErrorValue = {
  error: AxiosError | null
  setError: Dispatch<SetStateAction<AxiosError | null>> | null
}

export const ApiErrorContext = createContext<ErrorValue>({ error: null, setError: null })
export const ApiErrorStateProvider = ({ children }: PropsWithChildren) => {
  const [error, setError] = useState<AxiosError | null>(null)

  return (
    <ApiErrorContext.Provider value={{ error: error, setError }}>
      {children}
    </ApiErrorContext.Provider>
  )
}
