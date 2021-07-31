import {Component, Input} from '@angular/core';
import {BooleanHelper} from "../../../utilities/boolean.util";
import {LinkItem} from "../../../models/MeetingAgenda.model";

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent {
  @Input() public links: LinkItem[] = [];

  public get linksInvalid(): boolean {
    return this.links.some((link) => {
      return BooleanHelper.hasNoValue(link.url) || BooleanHelper.hasNoValue(link.text);
    });
  }

  public addLink() {
    this.links.push({
      text: "",
      url: "",
      details: "",
    });
  }

  public removeLink(index: number) {
    this.links.splice(index, 1);
  }

}
