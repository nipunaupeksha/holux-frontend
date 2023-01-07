import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit {
  username: string = ''
  password: string = ''
  usernameError: boolean = false
  passwordError: boolean = false
  invalidCredentials: boolean = false

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe((data: any) => {
      if (data) {
        this.username = data.username
        this.password = data.password
      } else {
        this.username = ''
        this.password = ''
      }
    })
  }

  ngOnInit(): void {}

  signin() {
    this.usernameError = this.username == undefined
    this.passwordError = this.password == undefined

    if (this.passwordError || this.usernameError) return

    this.usernameError = this.username.trim().length == 0
    this.passwordError = this.password.trim().length == 0

    if (this.passwordError || this.usernameError) return

    this.userService.signin(this.username, this.password).subscribe(
      (data) => {
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        this.invalidCredentials = true
        //console.log(error)
      }
    )
  }

  forgetPassword() {
    this.router.navigate(['/forgot-password'])
  }
}
