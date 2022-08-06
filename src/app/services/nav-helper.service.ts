import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";

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

  public goToCommunityCalendar(): void {
    this.goToRoute(ROUTES_ENUM.CommunityCalendar);
  }

  public goToResources(): void {
    this.goToRoute(ROUTES_ENUM.Resources);
  }

  public goToMailtoGenerator(): void {
    this.goToRoute(ROUTES_ENUM.MailtoGenerator);
  }

  public goToCityFOIA(): void {
    this.goToRoute(ROUTES_ENUM.CityFOIA);
  }

  public goToSignupToSpeak(): void {
    this.goToRoute(ROUTES_ENUM.SignupToSpeak);
  }

  public goToContactList(): void {
    this.goToRoute(ROUTES_ENUM.ContactList);
  }

  public goToDsmCityUpdates(): void {
    this.goToRoute(ROUTES_ENUM.DsmCityUpdates);
  }

  public toNewsletter(): void {
    this.goToRoute(ROUTES_ENUM.Newsletter);
  }

  public goToCouncilMeetings(): void {
    this.goToRoute(ROUTES_ENUM.CouncilMeetings);
  }

  public goToAgendaInfoList(): void {
    this.goToRoute(ROUTES_ENUM.AgendaPublished);
  }

  public goToAgendaInfo(id: string): void {
    this.goToRoutes([ROUTES_ENUM.AgendaPublished, id]);
  }

  public goToMarkdownViewer(filePath: string): void {
    this.goToRoutes([ROUTES_ENUM.MarkdownViewer, filePath]);
  }

  public goToCouncilToolkit(): void {
    this.goToRoutes([ROUTES_ENUM.CouncilToolkit]);
  }

  // ADMIN

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  public goToAgendaManagement(): void {
    this.goToRoute(ROUTES_ENUM.AgendaManagement);
  }

  public goToAgendaFormAdd(): void {
    this.goToRoute(ROUTES_ENUM.AgendaForm);
  }

  public goToAgendaFormEdit(id: string): void {
    this.goToRoute(ROUTES_ENUM.AgendaForm + `/${id}`);
  }

  public goToAgendaDetails(id: string): void {
    this.goToRoute(ROUTES_ENUM.AgendaDetails + `/${id}`);
  }

  public goToAgendaItemFormAdd(meetingId: string): void {
    this.goToRoute(ROUTES_ENUM.AgendaItemForm + `/meeting/${meetingId}`);
  }

  public goToAgendaItemFormEdit(itemId: string): void {
    this.goToRoute(ROUTES_ENUM.AgendaItemForm + `/item/${itemId}`);
  }

  public goToAgendaItemDetails(itemId: string): void {
    this.goToRoute(ROUTES_ENUM.AgendaItemDetails + `/${itemId}`);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
