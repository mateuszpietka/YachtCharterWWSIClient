import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InfoCompanyComponent } from './info-company/info-company.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { YachtDetailsComponent } from './yacht-details/yacht-details.component';
import { YachtListComponent } from './yacht-list/yacht-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'yachtList', component: YachtListComponent },
      { path: 'yachtDetails', component: YachtDetailsComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: 'infoCompany', component: InfoCompanyComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
