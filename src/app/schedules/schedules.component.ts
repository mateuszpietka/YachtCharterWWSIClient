import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ReservationApiController } from '../api/controllers/resevation-api.controller';
import { YachtApiController } from '../api/controllers/yacht-api.controller';
import { AddReservationModel } from '../api/models/AddReservationModel';
import { ReservationModel } from '../api/models/ReservationModel';
import { YachtModel } from '../api/models/YachtModel';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  addReservationModel: AddReservationModel = new AddReservationModel();
  reservations: ReservationModel[] = [];
  yachts: YachtModel[] = [];
  selectedYacht: YachtModel = new YachtModel;

  constructor(
    private yachtApiController: YachtApiController,
    private reservationApiController: ReservationApiController,
    private messageService: MessageService) {
    this.yachtApiController.getAll().subscribe(date => this.yachts = date);
   }

  ngOnInit(): void {

  }

  onSelected(){
    this.reservationApiController.getAll(this.selectedYacht.id).subscribe(date => this.reservations = date)
  }

  async addReservation(){
    this.addReservationModel.yachtId = this.selectedYacht.id;
    this.reservationApiController.add(this.addReservationModel).subscribe();
    await this.delay(1000);
    this.reservationApiController.getAll(this.selectedYacht.id).subscribe(date => this.reservations = date)
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
