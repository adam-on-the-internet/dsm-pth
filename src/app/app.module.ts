import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {HeaderComponent} from "./components/header/header.component";
import {BodyComponent} from "./components/body/body.component";
import {LoadingComponent} from "./components/simple/loading/loading.component";
import {CardComponent} from "./components/simple/card/card.component";
import {BodyAltComponent} from "./components/body-alt/body-alt.component";
import {NumberInputComponent} from "./components/simple/form/number-input/number-input.component";
import {StringInputComponent} from "./components/simple/form/string-input/string-input.component";
import {SelectInputComponent} from "./components/select-input/select-input.component";
import {OnOffSwitchComponent} from "./components/simple/form/on-off-switch/on-off-switch.component";
import {StringListInputComponent} from "./components/simple/form/string-list-input/string-list-input.component";
import {StringListDisplayComponent} from "./components/simple/string-list-display/string-list-display.component";
import {DocumentArchiveComponent} from "./components/document-archive/document-archive.component";
import {CommunityCalendarComponent} from "./components/community-calendar/community-calendar.component";
import {DocumentInfoComponent} from "./components/document-info/document-info.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {MeetingAgendaManagementComponent} from './components/meeting-agenda-management/meeting-agenda-management.component';
import {MeetingAgendaFormComponent} from './components/meeting-agenda-form/meeting-agenda-form.component';
import {MeetingAgendaDetailsComponent} from './components/meeting-agenda-details/meeting-agenda-details.component';
import {AgendaItemFormComponent} from './components/agenda-item-form/agenda-item-form.component';
import {AgendaItemDetailsComponent} from './components/agenda-item-details/agenda-item-details.component';
import {LinkListComponent} from './components/simple/link-list/link-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    BodyAltComponent,
    NumberInputComponent,
    StringInputComponent,
    SelectInputComponent,
    OnOffSwitchComponent,
    StringListInputComponent,
    StringListDisplayComponent,
    DocumentArchiveComponent,
    CommunityCalendarComponent,
    DocumentInfoComponent,
    ContactListComponent,
    MeetingAgendaManagementComponent,
    MeetingAgendaFormComponent,
    MeetingAgendaDetailsComponent,
    AgendaItemFormComponent,
    AgendaItemDetailsComponent,
    LinkListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
