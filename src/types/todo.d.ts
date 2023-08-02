export type TodoObject = {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export interface SignInResponse {
  access_token: string
}

export type CreateTodoResponse = TodoObject

export type GetTodosResponse = TodoObject[]

export type UpdateTodoResponse = TodoObject
