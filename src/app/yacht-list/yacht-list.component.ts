import { Component, OnInit } from '@angular/core';
import { YachtApiController } from '../api/controllers/yacht-api.controller';
import { YachtModel } from '../api/models/YachtModel';

@Component({
  selector: 'app-yacht-list',
  templateUrl: './yacht-list.component.html',
  styleUrls: ['./yacht-list.component.scss']
})
export class YachtListComponent implements OnInit {

  yachts: YachtModel[] = [];

  constructor(private yachtApiController: YachtApiController) {
    this.yachtApiController.getAll().subscribe(date => this.yachts = date);
  }

  ngOnInit(): void {
  }
}
