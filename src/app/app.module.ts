import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MarkdownModule, MarkedOptions, MarkedRenderer} from "ngx-markdown";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
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
import {CommunityCalendarComponent} from "./components/community-calendar/community-calendar.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {MeetingAgendaManagementComponent} from "./components/meeting-agenda-management/meeting-agenda-management.component";
import {MeetingAgendaFormComponent} from "./components/meeting-agenda-form/meeting-agenda-form.component";
import {MeetingAgendaDetailsComponent} from "./components/meeting-agenda-details/meeting-agenda-details.component";
import {AgendaItemFormComponent} from "./components/agenda-item-form/agenda-item-form.component";
import {AgendaItemDetailsComponent} from "./components/agenda-item-details/agenda-item-details.component";
import {LinkListComponent} from "./components/simple/link-list/link-list.component";
import {PublishedAgendaComponent} from "./components/published-agenda/published-agenda.component";
import {PublishedAgendaListComponent} from "./components/published-agenda-list/published-agenda-list.component";
import {LinkDisplayComponent} from "./components/link-display/link-display.component";
import {QuillModule} from "ngx-quill";
import {QuillEditorDefaultComponent} from "./components/quill-editor-default/quill-editor-default.component";
import {QuillViewDefaultComponent} from "./components/quill-view-default/quill-view-default.component";
import {ModalTriggerButtonComponent} from "./components/simple/modal-trigger-button/modal-trigger-button.component";
import {ModalBoxBasicComponent} from "./components/simple/modal-box-basic/modal-box-basic.component";
import {MarkdownViewerComponent} from "./components/markdown-viewer/markdown-viewer.component";
import {CouncilToolkitComponent} from "./components/council-toolkit/council-toolkit.component";
import {CouncilMeetingsComponent} from "./components/council-meetings/council-meetings.component";
import {SignupToSpeakComponent} from "./components/signup-to-speak/signup-to-speak.component";
import {MailtoGeneratorComponent} from './components/mailto-generator/mailto-generator.component';
import {CityFoiaComponent} from './components/city-foia/city-foia.component';
import {EmailDisplayComponent} from './components/email-display/email-display.component';
import {ResourcesComponent} from './components/resources/resources.component';
import {CouncilMeetingGuideComponent} from './components/council-meeting-guide/council-meeting-guide.component';
import {NewsletterComponent} from './components/newsletter/newsletter.component';
import {NewsPostsComponent} from './components/news-posts/news-posts.component';
import {CalendarEventsComponent} from './components/calendar-events/calendar-events.component';
import {CouncilMeetingSummariesComponent} from './components/council-meeting-summaries/council-meeting-summaries.component';
import {AgendaVersionsComponent} from './components/agenda-versions/agenda-versions.component';
import {DsmUpdatesComponent} from './components/dsm-updates/dsm-updates.component';
import {DsmUpdatesManagementComponent} from './components/dsm-updates-management/dsm-updates-management.component';
import {DsmAllUpdatesComponent} from './components/dsm-all-updates/dsm-all-updates.component';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return "<div class=\"card mb-2 bg-grey-alt\"><div class=\"card-body py-0 px-3\"><blockquote class=\"blockquote\"><p>" + text + "</p></blockquote></div></div>";
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

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
    CommunityCalendarComponent,
    ContactListComponent,
    MeetingAgendaManagementComponent,
    MeetingAgendaFormComponent,
    MeetingAgendaDetailsComponent,
    AgendaItemFormComponent,
    AgendaItemDetailsComponent,
    LinkListComponent,
    PublishedAgendaComponent,
    PublishedAgendaListComponent,
    LinkDisplayComponent,
    QuillEditorDefaultComponent,
    QuillViewDefaultComponent,
    ModalTriggerButtonComponent,
    ModalBoxBasicComponent,
    MarkdownViewerComponent,
    CouncilToolkitComponent,
    CouncilMeetingsComponent,
    SignupToSpeakComponent,
    MailtoGeneratorComponent,
    CityFoiaComponent,
    EmailDisplayComponent,
    ResourcesComponent,
    CouncilMeetingGuideComponent,
    NewsletterComponent,
    NewsPostsComponent,
    CalendarEventsComponent,
    CouncilMeetingSummariesComponent,
    AgendaVersionsComponent,
    DsmUpdatesComponent,
    DsmUpdatesManagementComponent,
    DsmAllUpdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
