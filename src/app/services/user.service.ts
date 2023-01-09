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

  public signin(username: string, password: string) {
    return this.http
      .post(this.BACKEND_URL + '/users/signin', {
        username: username,
        password: password,
      })
      .pipe(map((res) => res))
  }

  public signup(
    username: string,
    email: string,
    password: string,
    fullname: string,
    type: string
  ) {
    return this.http
      .post(this.BACKEND_URL + '/users/signup', {
        username: username,
        email: email,
        password: password,
        fullname: fullname,
        type: type,
      })
      .pipe(map((res) => res))
  }

  public forgetpassword(email: string) {
    return this.http
      .post(this.BACKEND_URL + '/users/forgetpassword', { email: email })
      .pipe(map((res) => res))
  }
}
