import { ChangeEvent, useCallback, useReducer } from 'react'

const emailRegx = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,})+$/

interface State {
  touched: boolean
  valid: boolean
  value: string
}

type Email = 'email'
type Password = 'password'
type Text = 'text'

type InputType = Email | Password | Text

interface Payload {
  inputType: InputType
  value: string
}

interface ChangeAction {
  type: 'onChange'
  payload: Payload
}

interface OnBlurAction {
  type: 'onBlur'
}

type Action = ChangeAction | OnBlurAction

const initialState: State = {
  touched: false,
  valid: false,
  value: '',
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'onBlur':
      return { ...state, touched: true }
    case 'onChange':
      switch (action.payload.inputType) {
        case 'email':
          if (emailRegx.test(action.payload.value))
            return { ...state, valid: true, value: action.payload.value }
          return { ...state, valid: false, value: action.payload.value }
        case 'password':
          if (action.payload.value.length >= 8)
            return { ...state, valid: true, value: action.payload.value }
          return { ...state, valid: false, value: action.payload.value }
        case 'text':
          return { ...state, value: action.payload.value }
      }
  }
}

const useInput = (
  inputType: InputType,
): [State, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'onChange',
      payload: { inputType, value: e.currentTarget.value },
    })

  const onBlur = useCallback(() => dispatch({ type: 'onBlur' }), [])

  return [state, onChange, onBlur]
}

export default useInput
