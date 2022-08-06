import {Component, OnInit} from '@angular/core';
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";
import {NewsPost} from "../../models/NewsPost.model";

@Component({
  selector: 'app-dsm-city-updates',
  templateUrl: './dsm-city-updates.component.html',
  styleUrls: ['./dsm-city-updates.component.css']
})
export class DsmCityUpdatesComponent implements OnInit {
  public newsPosts: NewsPost[] = null;

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public ngOnInit(): void {
    this.getAllNewsPosts();
  }

  private getAllNewsPosts() {
    this.newsPosts = null;
    this.dsmCityUpdateService.getAllNewsPosts()
      .subscribe((res) => this.newsPosts = res,
        (error) => {
          console.log("get all news posts failed");
        });
  }

}
