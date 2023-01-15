import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription, timer } from 'rxjs'
import { map, share } from 'rxjs/operators'

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss'],
})
export class UserLogoutComponent implements OnInit, OnDestroy {
  @Input('username') username: string = ''
  @Input('usertype') usertype: string = ''
  currentTime = new Date()
  subscription: Subscription
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.currentTime = time
      })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  signOut() {
    this.router.navigate(['/sign-in'])
  }

  viewDashboard() {
    this.router.navigate(['/dashboard'])
  }
}
