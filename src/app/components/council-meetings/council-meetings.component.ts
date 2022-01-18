import {Component, OnInit} from "@angular/core";
import {CouncilMeetingService} from "src/app/services/council-meeting.service";
import {CouncilMeetingYear} from "../../models/CouncilMeeting.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-council-meetings",
  templateUrl: "./council-meetings.component.html",
  styleUrls: ["./council-meetings.component.css"]
})
export class CouncilMeetingsComponent implements OnInit {
  private showAll = false;

  public get meetingsByYear(): CouncilMeetingYear[] {
    if (this.showAll) {
      return this.councilMeetingService.councilMeetingsByYear;
    } else {
      return this.councilMeetingService.shownCouncilMeetingsByYear;
    }
  }

  constructor(
    public councilMeetingService: CouncilMeetingService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.checkQueryParams();
  }

  private checkQueryParams() {
    this.route.queryParams
      .subscribe(params => {
          const showAllQueryParam = params.showall;
          if (showAllQueryParam) {
            this.showAll = showAllQueryParam.toLowerCase() === "true";
          }
        }
      );
  }
}
