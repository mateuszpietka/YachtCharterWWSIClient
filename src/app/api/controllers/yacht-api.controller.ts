import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YachtModel } from '../models/YachtModel';
import { BaseApiController } from './base-api.controller';

@Injectable({
  providedIn: 'root'
})

export class YachtApiController extends BaseApiController  {

  path = 'yacht';

  constructor(http: HttpClient) {
    super(http)
   }

  getAll() : Observable<YachtModel[]> {
    return super.get<YachtModel[]>(`${this.path}`);
  }
}
