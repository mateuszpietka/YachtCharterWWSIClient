import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddReservationModel } from '../models/AddReservationModel';
import { ReservationModel } from '../models/ReservationModel';
import { BaseApiController } from './base-api.controller';

@Injectable({
  providedIn: 'root'
})

export class ReservationApiController extends BaseApiController  {

  path = 'reservations';

  constructor(http: HttpClient) {
    super(http)
   }

  getAll(yachtId: Number) : Observable<ReservationModel[]> {
    return super.get<ReservationModel[]>(`${this.path}?yachtId=${yachtId}`);
  }

  add(reservation: AddReservationModel) : Observable<boolean> {
    return super.post<boolean>(`${this.path}`, reservation)
  }
}
