import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { SigninComponent } from './pages/signin/signin.component'
import { SignupComponent } from './pages/signup/signup.component'

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forget-password', component: DashboardComponent },
  { path: '**', redirectTo: '/signin' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
