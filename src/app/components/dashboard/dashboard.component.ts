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
    private navHelper: NavHelperService,
    private settings: SettingsService,
    public linkService: LinkService,
  ) {
    this.settings.showNav = true;
  }

  public goToDocs() {
    this.navHelper.goToDocs();
  }

  public goToCommunityCalendar() {
    this.navHelper.goToCommunityCalendar();
  }

  public goToContactList() {
    this.navHelper.goToContactList();
  }

}
