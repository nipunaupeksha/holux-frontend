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
    this.route.queryParams.subscribe((data: Params) => {
      if (data) {
        this.email = data['email']
        this.token = data['token']
      } else {
        this.token = ''
        this.email = ''
      }
    })
  }

  checktoken() {
    this.tokenError = this.token == undefined
    if (this.tokenError) return
    this.tokenError = this.token.trim().length == 0
    if (this.tokenError) return

    this.userService.validateToken(this.email, this.token).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => console.log(error)
    )
  }
}
