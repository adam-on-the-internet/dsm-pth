import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {CommunityCalendarComponent} from "./components/community-calendar/community-calendar.component";
import {DocumentArchiveComponent} from "./components/document-archive/document-archive.component";
import {DocumentInfoComponent} from "./components/document-info/document-info.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {MeetingAgendaManagementComponent} from "./components/meeting-agenda-management/meeting-agenda-management.component";
import {MeetingAgendaFormComponent} from "./components/meeting-agenda-form/meeting-agenda-form.component";

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  {path: ROUTES_ENUM.Login, component: LoginComponent},
  {path: ROUTES_ENUM.Profile, component: ProfileComponent},
  {path: ROUTES_ENUM.Admin, component: AdminComponent},
  {path: ROUTES_ENUM.AgendaManagement, component: MeetingAgendaManagementComponent},
  {path: ROUTES_ENUM.AgendaForm, component: MeetingAgendaFormComponent},
  {path: ROUTES_ENUM.AgendaForm + "/:id", component: MeetingAgendaFormComponent},
  {path: ROUTES_ENUM.ContactList, component: ContactListComponent},
  {path: ROUTES_ENUM.DocumentArchive, component: DocumentArchiveComponent},
  {path: ROUTES_ENUM.CommunityCalendar, component: CommunityCalendarComponent},
  {path: ROUTES_ENUM.Document + "/:link", component: DocumentInfoComponent},
  // default
  {path: "**", redirectTo: ROUTES_ENUM.Dashboard},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
})
export class AppRoutingModule {
}
