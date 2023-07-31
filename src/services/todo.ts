import { AxiosPromise } from 'axios'
import { SignInResponse } from 'types/todo'
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
}
