import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component implements OnInit {
  fullname: string = ''
  email: string = ''
  username: string = ''
  password: string = ''
  retypePassword: string = ''
  type: string = 'User'

  fullnameError: boolean = false
  emailError: boolean = false
  usernameError: boolean = false
  passwordError: boolean = false
  retypePasswordError: boolean = false
  typeError: boolean = false

  usernameAlreadyExistsError: boolean = false
  emailAlreadyExistsError: boolean = false
  passwordsDoNotMatchError: boolean = false

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe((data: any) => {
      if (data) {
        this.fullname = data.fullname
        this.email = data.email
        this.username = data.username
        this.password = data.password
        this.retypePassword = data.retypePassword
        this.type = data.type
      } else {
        this.fullname = ''
        this.email = ''
        this.username = ''
        this.password = ''
        this.retypePassword = ''
        this.type = 'User'
      }
    })
  }

  ngOnInit(): void {}

  signup() {
    this.fullnameError = this.fullname == undefined
    this.emailError = this.email == undefined
    this.usernameError = this.username == undefined
    this.passwordError = this.password == undefined
    this.retypePasswordError = this.retypePassword == undefined

    if (this.fullnameError || this.emailError || this.usernameError || this.passwordError)
      return

    this.fullnameError = this.fullname.trim().length == 0
    this.emailError = this.email.trim().length == 0
    this.usernameError = this.username.trim().length == 0
    this.passwordError = this.password.trim().length == 0
    this.retypePasswordError = this.retypePassword.trim().length == 0

    if (
      this.fullnameError ||
      this.emailError ||
      this.usernameError ||
      this.passwordError ||
      this.retypePasswordError
    )
      return

    this.userService
      .signup(this.username, this.email, this.password, this.fullname, this.type)
      .subscribe(
        (data) => {
          this.router.navigate(['/dashboard'])
        },
        (error) => {
          console.log(error)
        }
      )

    this.retypePasswordError = this.password == this.retypePassword
  }

  signin() {
    this.router.navigate(['/signin'])
  }
}
