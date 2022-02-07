import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {CommunityCalendarComponent} from "./components/community-calendar/community-calendar.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {MeetingAgendaManagementComponent} from "./components/meeting-agenda-management/meeting-agenda-management.component";
import {MeetingAgendaFormComponent} from "./components/meeting-agenda-form/meeting-agenda-form.component";
import {MeetingAgendaDetailsComponent} from "./components/meeting-agenda-details/meeting-agenda-details.component";
import {AgendaItemFormComponent} from "./components/agenda-item-form/agenda-item-form.component";
import {AgendaItemDetailsComponent} from "./components/agenda-item-details/agenda-item-details.component";
import {PublishedAgendaListComponent} from "./components/published-agenda-list/published-agenda-list.component";
import {PublishedAgendaComponent} from "./components/published-agenda/published-agenda.component";
import {MarkdownViewerComponent} from "./components/markdown-viewer/markdown-viewer.component";
import {CouncilToolkitComponent} from "./components/council-toolkit/council-toolkit.component";
import {CouncilMeetingsComponent} from "./components/council-meetings/council-meetings.component";
import {SignupToSpeakComponent} from "./components/signup-to-speak/signup-to-speak.component";
import {MailtoGeneratorComponent} from "./components/mailto-generator/mailto-generator.component";
import {CityFoiaComponent} from "./components/city-foia/city-foia.component";
import {ResourcesComponent} from "./components/resources/resources.component";

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  {path: ROUTES_ENUM.Login, component: LoginComponent},
  {path: ROUTES_ENUM.Profile, component: ProfileComponent},
  {path: ROUTES_ENUM.Admin, component: AdminComponent},

  {path: ROUTES_ENUM.CouncilToolkit, component: CouncilToolkitComponent},
  {path: ROUTES_ENUM.CouncilMeetings, component: CouncilMeetingsComponent},

  {path: ROUTES_ENUM.AgendaPublished, component: PublishedAgendaListComponent},
  {path: ROUTES_ENUM.AgendaPublished + "/:id", component: PublishedAgendaComponent},

  {path: ROUTES_ENUM.AgendaManagement, component: MeetingAgendaManagementComponent},
  {path: ROUTES_ENUM.AgendaForm, component: MeetingAgendaFormComponent},
  {path: ROUTES_ENUM.AgendaForm + "/:id", component: MeetingAgendaFormComponent},
  {path: ROUTES_ENUM.AgendaDetails + "/:id", component: MeetingAgendaDetailsComponent},

  {path: ROUTES_ENUM.AgendaItemForm + "/meeting/:meetingId", component: AgendaItemFormComponent},
  {path: ROUTES_ENUM.AgendaItemForm + "/item/:itemId", component: AgendaItemFormComponent},
  {path: ROUTES_ENUM.AgendaItemDetails + "/:itemId", component: AgendaItemDetailsComponent},

  {path: ROUTES_ENUM.ContactList, component: ContactListComponent},
  {path: ROUTES_ENUM.SignupToSpeak, component: SignupToSpeakComponent},
  {path: ROUTES_ENUM.MailtoGenerator, component: MailtoGeneratorComponent},
  {path: ROUTES_ENUM.Resources, component: ResourcesComponent},
  {path: ROUTES_ENUM.CityFOIA, component: CityFoiaComponent},
  {path: ROUTES_ENUM.CommunityCalendar, component: CommunityCalendarComponent},
  {path: ROUTES_ENUM.MarkdownViewer + "/:path", component: MarkdownViewerComponent},
  // default
  {path: ROUTES_ENUM.ContactListOld, redirectTo: ROUTES_ENUM.ContactList},
  {path: "**", redirectTo: ROUTES_ENUM.Dashboard},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: "legacy"})],
})
export class AppRoutingModule {
}
