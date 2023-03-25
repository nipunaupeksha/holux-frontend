import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component implements OnInit {
  USER_TYPES = [
    { id: 'USER', value: 'User' },
    { id: 'ADMIN', value: 'Admin' },
  ]

  fullname: string = ''
  email: string = ''
  mobile: string = ''
  username: string = ''
  password: string = ''
  retypePassword: string = ''
  usertype: string = 'USER'

  fullnameError: boolean = false
  emailError: boolean = false
  mobileError: boolean = false
  usernameError: boolean = false
  passwordError: boolean = false
  retypePasswordError: boolean = false
  typeError: boolean = false
  usertypeError: boolean = false

  usernameAlreadyExistsError: boolean = false
  emailAlreadyExistsError: boolean = false
  passwordsDoNotMatchError: boolean = false

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    // If undefined values are entered
    this.fullnameError = this.fullname == undefined
    this.emailError = this.email == undefined
    this.mobileError = this.mobile == undefined
    this.usernameError = this.username == undefined
    this.passwordError = this.password == undefined
    this.retypePasswordError = this.retypePassword == undefined
    this.usertypeError = this.usertype == undefined

    if (
      this.fullnameError ||
      this.emailError ||
      this.mobileError ||
      this.usernameError ||
      this.passwordError ||
      this.retypePasswordError ||
      this.usertypeError
    )
      return

    // If empty values are entered
    this.fullnameError = this.fullname.trim().length == 0
    this.emailError = this.email.trim().length == 0
    this.mobileError = this.mobile.trim().length == 0
    this.usernameError = this.username.trim().length == 0
    this.passwordError = this.password.trim().length == 0
    this.retypePasswordError = this.retypePassword.trim().length == 0
    this.usertypeError = this.usertype.trim().length == 0

    if (
      this.fullnameError ||
      this.emailError ||
      this.mobileError ||
      this.usernameError ||
      this.passwordError ||
      this.retypePasswordError ||
      this.usertypeError
    )
      return

    // If passwords are not matched
    this.passwordsDoNotMatchError = this.password != this.retypePassword
    if (this.passwordsDoNotMatchError) return

    this.userService
      .signUp(
        this.username,
        this.email,
        this.mobile,
        this.password,
        this.fullname,
        this.usertype
      )
      .subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['/dashboard'])
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
