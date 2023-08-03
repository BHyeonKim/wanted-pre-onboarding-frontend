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

export const DataContext = createContext<DataProviderValue | undefined>(undefined)

const DataStateProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<DataState>('fresh')

  return (
    <DataContext.Provider value={{ dataState: state, setDataState: setState }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataStateProvider
