import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss'],
})
export class Card4Component implements OnInit {
  token: string = ''
  email: string = ''
  tokenError: boolean = false
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    this.route.queryParams.subscribe((params: Params) => {
      if (params) {
        this.email = params['email']
      } else {
        this.email = ''
      }
    })
  }

  validateToken() {
    this.tokenError = this.token == undefined
    if (this.tokenError) return
    this.tokenError = this.token.trim().length == 0
    if (this.tokenError) return

    this.userService.validateToken(this.email, this.token).subscribe(
      (data) => {
        console.log(data)
        this.router.navigate(['/forget-password', 'change-password'], {
          queryParams: { email: this.email },
        })
      },
      (error) => console.log(error)
    )
  }
}
