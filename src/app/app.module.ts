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

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'finance', component: FinanceComponent},
  {path: 'profit', component: ProfitComponent},
  {path: 'capital', component: CapitalComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
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
    HeaderComponent,
    HeaderSearchComponent,
    InboxComponent,
    LoginComponent,
    NotificationsComponent,
    SideNavComponent
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
