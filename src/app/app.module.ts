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
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ReservationApiController } from './api/controllers/resevation-api.controller';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    FormsModule,
    CalendarModule
  ],
  providers: [YachtApiController, ReservationApiController, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
