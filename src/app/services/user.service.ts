import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BACKEND_URL = 'http://localhost:8000'

  private HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })

  constructor(private http: HttpClient) {}

  public signIn(username: string, password: string) {
    return this.http
      .post(this.BACKEND_URL + '/users/sign-in', {
        username: username,
        password: password,
      })
      .pipe(map((res) => res))
  }

  public signUp(
    username: string,
    email: string,
    password: string,
    fullname: string,
    type: string
  ) {
    return this.http
      .post(this.BACKEND_URL + '/users/sign-up', {
        username: username,
        email: email,
        password: password,
        fullname: fullname,
        type: type,
      })
      .pipe(map((res) => res))
  }

  public forgetPassword(email: string) {
    return this.http
      .post(this.BACKEND_URL + '/users/forget-password', { email: email })
      .pipe(map((res) => res))
  }

  public validateToken(email: string, token: string) {
    return this.http
      .post(this.BACKEND_URL + '/users/forget-password/token', {
        email: email,
        token: token,
      })
      .pipe(map((res) => res))
  }

  public changePassword(email: string, password: string) {
    return this.http
      .post(this.BACKEND_URL + '/users/forget-password/change-password', {
        email: email,
        password: password,
      })
      .pipe(map((res) => res))
  }
}
