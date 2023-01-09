import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgApexchartsModule } from 'ng-apexcharts'
import { InlineSVGModule } from 'ng-inline-svg-2'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Card1Component } from './components/cards/card1/card1.component'
import { Card2Component } from './components/cards/card2/card2.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component'
import { HeaderComponent } from './components/header/header.component'
import { ToolbarComponent } from './components/header/toolbar/toolbar.component'
import { TopbarComponent } from './components/header/topbar/topbar.component'
import { Widget1Component } from './components/widgets/widget1/widget1.component'
import { Widget2Component } from './components/widgets/widget2/widget2.component'
import { Widget3Component } from './components/widgets/widget3/widget3.component'
import { Widget4Component } from './components/widgets/widget4/widget4.component'
import { Widget5Component } from './components/widgets/widget5/widget5.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { SigninComponent } from './pages/signin/signin.component'
import { SignupComponent } from './pages/signup/signup.component';
import { Card3Component } from './components/cards/card3/card3.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    Card1Component,
    DashboardComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    ToolbarComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component,
    FooterComponent,
    SignupComponent,
    Card2Component,
    Card3Component,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
