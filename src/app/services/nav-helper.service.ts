import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";
import {DocumentInfo} from "../models/DocumentInfo.model";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) {
  }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  public goToDocs(): void {
    this.goToRoute(ROUTES_ENUM.DocumentArchive);
  }

  public goToCommunityCalendar(): void {
    this.goToRoute(ROUTES_ENUM.CommunityCalendar);
  }

  public goToContactList(): void {
    this.goToRoute(ROUTES_ENUM.ContactList);
  }

  public goToDocument(document: DocumentInfo): void {
    this.goToRoutes([ROUTES_ENUM.Document, document.link]);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
