import {Component, OnInit} from '@angular/core';
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";

@Component({
  selector: 'app-dsm-city-updates',
  templateUrl: './dsm-city-updates.component.html',
  styleUrls: ['./dsm-city-updates.component.css']
})
export class DsmCityUpdatesComponent implements OnInit {

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public ngOnInit(): void {
  }

}
