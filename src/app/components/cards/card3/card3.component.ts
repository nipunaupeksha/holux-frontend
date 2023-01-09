import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss'],
})
export class Card3Component implements OnInit {
  email: string = ''
  emailError: boolean = false

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  sendEmail() {
    this.emailError = this.email == undefined
    if (this.emailError) return
    this.emailError = this.email.trim().length == 0
    if (this.emailError) return
    this.userService.forgetPassword(this.email).subscribe(
      (data) => {
        this.router.navigate(['forget-password', 'token'], {
          queryParams: { email: this.email },
        })
      },
      (error) => console.log(error)
    )
  }
}
