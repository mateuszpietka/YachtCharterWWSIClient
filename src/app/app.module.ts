import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { YachtApiController } from './api/controllers/yacht-api.controller';
import {TableModule} from 'primeng/table';
import { YachtListComponent } from './yacht-list/yacht-list.component';
import { YachtDetailsComponent } from './yacht-details/yacht-details.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { InfoCompanyComponent } from './info-company/info-company.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    AboutComponent,
    YachtListComponent,
    YachtDetailsComponent,
    SchedulesComponent,
    InfoCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule
  ],
  providers: [YachtApiController],
  bootstrap: [AppComponent]
})
export class AppModule { }
