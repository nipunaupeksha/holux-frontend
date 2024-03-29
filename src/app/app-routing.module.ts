import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ForgetPasswordTokenComponent } from './pages/forget-password-token/forget-password-token.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { PosComponent } from './pages/pos/pos.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'
import { SigninComponent } from './pages/signin/signin.component'
import { SignupComponent } from './pages/signup/signup.component'

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pos-system', component: PosComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'forget-password/token', component: ForgetPasswordTokenComponent },
  { path: 'forget-password/change-password', component: ResetPasswordComponent },
  { path: '**', redirectTo: '/sign-in' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
