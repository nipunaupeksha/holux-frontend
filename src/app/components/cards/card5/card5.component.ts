import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.scss'],
})
export class Card5Component implements OnInit {
  password: string = ''
  retypePassword: string = ''
  email: string = ''

  passwordError: boolean = false
  retypePasswordError: boolean = false
  passwordsDoNotMatchError: boolean = false

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params) this.email = params['email']
    })
  }

  changePassword() {
    this.passwordError = this.password == undefined
    this.retypePasswordError = this.retypePassword == undefined
    if (this.passwordError || this.retypePasswordError) return

    this.passwordError = this.password.trim().length == 0
    this.retypePasswordError = this.retypePassword.trim().length == 0
    if (this.passwordError || this.retypePasswordError) return

    this.passwordsDoNotMatchError = this.password != this.retypePassword
    if (this.passwordsDoNotMatchError) return
  }
}
