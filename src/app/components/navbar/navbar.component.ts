import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {CookieHelper} from "src/app/utilities/cookie.util";
import {LinkService} from "../../services/link.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get isAdmin(): boolean {
    return CookieHelper.getUserDetails().admin;
  }

  constructor(
    private navHelper: NavHelperService,
    public linkService: LinkService,
  ) {
  }

  public goToContacts(): void {
    this.navHelper.goToContactList();
  }

  public toNewsletter(): void {
    this.navHelper.toNewsletter();
  }

  public toToolkit(): void {
    this.navHelper.goToCouncilToolkit();
  }

  public toResources(): void {
    this.navHelper.goToResources();
  }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToProfile(): void {
    this.navHelper.goToProfile();
  }

  public goToAdmin(): void {
    this.navHelper.goToAdmin();
  }

  public logout(): void {
    CookieHelper.removeToken();
    this.navHelper.goToLogin();
  }
}
