import {Component, Input} from '@angular/core';
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";
import {DateHelper} from "../../utilities/date.util";
import {CouncilMeetingSummary} from "../../models/CouncilMeetingSummary.model";

@Component({
  selector: 'app-council-meeting-summaries',
  templateUrl: './council-meeting-summaries.component.html',
  styleUrls: ['./council-meeting-summaries.component.css']
})
export class CouncilMeetingSummariesComponent {
  @Input() public councilMeetings: CouncilMeetingSummary[] = null;
  @Input() public manageable = false;
  @Input() public showOnlyUnchecked = false;

  public get ready(): boolean {
    return this.councilMeetings !== null;
  }

  public get councilMeetingsForDisplay(): CouncilMeetingSummary[] {
    if (!this.ready) {
      return [];
    } else if (this.showOnlyUnchecked) {
      return this.councilMeetings.filter(x => !x.checked);
    } else {
      return this.councilMeetings;
    }
  }

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public getMonthName(monthNumber: string): string {
    return DateHelper.getMonthName(Number(monthNumber) - 1);
  }

  public getLinkText(link: string): string {
    return this.getLinkPiece(link, 0);
  }

  public getLinkHref(link: string): string {
    return this.getLinkPiece(link, 1);
  }

  public checkCouncilMeeting(councilMeeting: CouncilMeetingSummary) {
    let response;
    this.dsmCityUpdateService.checkCouncilMeeting(councilMeeting)
      .subscribe((res) => response = res,
        (error) => {
          console.log("check council meeting failed");
        }, () => {
          councilMeeting.checked = true;
        });
  }

  private getLinkPiece(link: string, pieceNumber: number) {
    const link_pieces = link.split("::");
    return link_pieces[pieceNumber].trim();
  }

}
