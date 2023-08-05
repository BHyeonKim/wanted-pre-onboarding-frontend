import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'

type DataState = 'fresh' | 'stale'

type DataProviderValue = {
  dataState: DataState
  setDataState: Dispatch<SetStateAction<DataState>>
}

export const DataStateContext = createContext<DataProviderValue | undefined>(undefined)

export const DataStateProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<DataState>('fresh')

  return (
    <DataStateContext.Provider value={{ dataState: state, setDataState: setState }}>
      {children}
    </DataStateContext.Provider>
  )
}
