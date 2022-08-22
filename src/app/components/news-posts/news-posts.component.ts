import {Component, Input} from '@angular/core';
import {NewsPost} from "../../models/NewsPost.model";
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";

@Component({
  selector: 'app-news-posts',
  templateUrl: './news-posts.component.html',
  styleUrls: ['./news-posts.component.css']
})
export class NewsPostsComponent {
  @Input() public newsPosts: NewsPost[] = null;
  @Input() public manageable = false;
  @Input() public showOnlyUnchecked = false;

  public get ready(): boolean {
    return this.newsPosts !== null;
  }

  public get newsPostsForDisplay(): NewsPost[] {
    if (!this.ready) {
      return [];
    } else if (this.showOnlyUnchecked) {
      return this.newsPosts.filter(x => !x.checked);
    } else {
      return this.newsPosts;
    }
  }

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public checkNewsPost(newsPost: NewsPost) {
    let response;
    this.dsmCityUpdateService.checkNewsPost(newsPost)
      .subscribe((res) => response = res,
        (error) => {
          console.log("check news post failed");
        }, () => {
          newsPost.checked = true;
        });
  }
}
