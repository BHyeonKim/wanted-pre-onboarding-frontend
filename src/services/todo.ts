import { AxiosPromise } from 'axios'
import type {
  CreateTodoResponse,
  GetTodosResponse,
  SignInResponse,
  UpdateTodoResponse,
} from 'types/todo'
import Axios from 'utils/axios'

export default {
  /**
   * 회원가입 api
   * @param email 사용자 이메일
   * @param password 사용자 패스워드
   */
  signUp(email: string, password: string): AxiosPromise {
    return Axios({
      url: '/auth/signup',
      method: 'post',
      data: {
        email,
        password,
      },
    })
  },
  /**
   * 로그인 api
   * @param email 사용자 이메일
   * @param password 사용자 패스워드
   */
  signIn(email: string, password: string): AxiosPromise<SignInResponse> {
    return Axios({
      url: '/auth/signin',
      method: 'post',
      data: {
        email,
        password,
      },
    })
  },
  /**
   * 투두 생성하는 api
   * @param todo 투두 내용
   */
  createTodo(todo: string): AxiosPromise<CreateTodoResponse> {
    return Axios({
      url: '/todos',
      method: 'post',
      data: {
        todo,
      },
    })
  },
  /**
   * 투두 리스트를 가져오는 api
   */
  getTodos(): AxiosPromise<GetTodosResponse> {
    return Axios({
      url: '/todos',
      method: 'get',
    })
  },
  /**
   * 투두 아이템을 수정하는 api
   * @param id 수정하고 싶은 투두 아이템의 아이디
   * @param todo 수정 될 투두 내용
   * @param isCompleted 투두 완료 여부
   */
  updateTodo(
    id: number,
    todo: string,
    isCompleted: boolean,
  ): AxiosPromise<UpdateTodoResponse> {
    return Axios({
      url: `/todos/${id}`,
      method: 'put',
      data: {
        todo,
        isCompleted,
      },
    })
  },
  /**
   * 투두 아이템을 삭제하는 api
   * @param id 삭제하고 싶은 투두 아이템의 아이디
   */
  deleteTodo(id: number): AxiosPromise {
    return Axios({
      url: `/todos/${id}`,
      method: 'delete',
    })
  },
}
