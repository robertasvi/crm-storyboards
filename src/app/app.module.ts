import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { FinanceComponent } from './components/finance/finance.component';
import { ProfitComponent } from './components/profit/profit.component';
import { CapitalComponent } from './components/capital/capital.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TeamComponent } from './components/team/team.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error/:type', component: ErrorComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sales/:search', component: SalesComponent},
  {path: 'stocks/:search', component: StocksComponent},
  {path: 'finance/:type/:search', component: FinanceComponent},
  {path: 'profit', component: ProfitComponent},
  {path: 'capital', component: CapitalComponent},
  {path: 'contacts/:type', component: ContactsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent, 
    HeaderComponent, 
    HomeComponent,
    SalesComponent,
    StocksComponent,
    FinanceComponent,
    ProfitComponent,
    CapitalComponent,
    ContactsComponent,
    TeamComponent,
    SettingsComponent,
    ErrorComponent,
    HeaderSearchComponent,
    InboxComponent,
    LoginComponent,
    NotificationsComponent,
    ProfitComponent,
    ActivityLogsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
