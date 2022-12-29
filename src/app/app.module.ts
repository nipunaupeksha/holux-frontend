import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InlineSVGModule } from 'ng-inline-svg-2'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Card1Component } from './components/cards/card1/card1.component'
import { HeaderComponent } from './components/header/header.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { SigninComponent } from './pages/signin/signin.component'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    Card1Component,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
