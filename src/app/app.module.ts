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
import { Card3Component } from './components/cards/card3/card3.component'
import { Card4Component } from './components/cards/card4/card4.component'
import { Card5Component } from './components/cards/card5/card5.component'
import { Dropdown1Component } from './components/dropdowns/dropdown1/dropdown1.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component'
import { HeaderComponent } from './components/header/header.component'
import { ToolbarComponent } from './components/header/toolbar/toolbar.component'
import { TopbarComponent } from './components/header/topbar/topbar.component'
import { CashInModalComponent } from './components/partials/cash-in-modal/cash-in-modal.component'
import { CashOutModalComponent } from './components/partials/cash-out-modal/cash-out-modal.component'
import { DayEndModalComponent } from './components/partials/day-end-modal/day-end-modal.component'
import { HomeModalComponent } from './components/partials/home-modal/home-modal.component'
import { ReportsModalComponent } from './components/partials/reports-modal/reports-modal.component'
import { UserLogoutComponent } from './components/partials/user-logout/user-logout.component'
import { VehicleModalComponent } from './components/partials/vehicle-modal/vehicle-modal.component'
import { Widget1Component } from './components/widgets/widget1/widget1.component'
import { Widget2Component } from './components/widgets/widget2/widget2.component'
import { Widget3Component } from './components/widgets/widget3/widget3.component'
import { Widget4Component } from './components/widgets/widget4/widget4.component'
import { Widget5Component } from './components/widgets/widget5/widget5.component'
import { Widget6Component } from './components/widgets/widget6/widget6.component'
import { Widget7Component } from './components/widgets/widget7/widget7.component'
import { DoubleClickPreventionDirective } from './directives/double-click-prevention.directive'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ForgetPasswordTokenComponent } from './pages/forget-password-token/forget-password-token.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { PosComponent } from './pages/pos/pos.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'
import { SigninComponent } from './pages/signin/signin.component'
import { SignupComponent } from './pages/signup/signup.component'
import { FilterPipe } from './pipes/filter.pipe'

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
    Card4Component,
    ForgetPasswordTokenComponent,
    ResetPasswordComponent,
    Card5Component,
    DoubleClickPreventionDirective,
    Dropdown1Component,
    FilterPipe,
    PosComponent,
    UserLogoutComponent,
    Widget6Component,
    Widget7Component,
    HomeModalComponent,
    CashInModalComponent,
    CashOutModalComponent,
    DayEndModalComponent,
    ReportsModalComponent,
    VehicleModalComponent,
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
