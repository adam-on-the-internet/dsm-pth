import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {SettingsService} from "../../services/settings.service";
import {LinkService} from "../../services/link.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

  constructor(
    private settings: SettingsService,
    public navHelper: NavHelperService,
    public linkService: LinkService,
  ) {
    this.settings.showNav = true;
  }

  public goToToolkit() {
    this.navHelper.goToCouncilToolkit();
  }

  public goToMeetings() {
    this.navHelper.goToCouncilMeetings();
  }

  public goToFOIA() {
    this.navHelper.goToCityFOIA();
  }

  public goToCommunityCalendar() {
    this.navHelper.goToCommunityCalendar();
  }

  public goToResources() {
    this.navHelper.goToResources();
  }

  public goToSignupToSpeak() {
    this.navHelper.goToSignupToSpeak();
  }

  public goToContactList() {
    this.navHelper.goToContactList();
  }

  public goToAgendaList() {
    this.navHelper.goToAgendaInfoList();
  }

}
