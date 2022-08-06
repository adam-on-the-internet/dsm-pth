import {Component, Input} from '@angular/core';
import {NewsPost} from "../../models/NewsPost.model";

@Component({
  selector: 'app-news-posts',
  templateUrl: './news-posts.component.html',
  styleUrls: ['./news-posts.component.css']
})
export class NewsPostsComponent {
  @Input() public newsPosts: NewsPost[] = null;
}
