import {Component, Input} from '@angular/core';
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";
import {AgendaVersion} from "../../models/AgendaVersion.model";

@Component({
  selector: 'app-agenda-versions',
  templateUrl: './agenda-versions.component.html',
  styleUrls: ['./agenda-versions.component.css']
})
export class AgendaVersionsComponent {
  @Input() public agendaVersions: AgendaVersion[] = null;
  @Input() public manageable = false;

  public get ready(): boolean {
    return this.agendaVersions !== null;
  }

  public get agendaVersionsForDisplay(): AgendaVersion[] {
    if (!this.ready) {
      return [];
    } else if (this.manageable) {
      return this.agendaVersions.filter(x => !x.checked);
    } else {
      return this.agendaVersions;
    }
  }

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public getFriendlyTitle(agendaVersion: AgendaVersion): string {
    return agendaVersion.meeting_code.replace(/_/g, ' ');
  }

  public getHtmlContent(agendaVersion: AgendaVersion): string {
    return agendaVersion.plaintext.replace(/\n/g, '<br>');
  }

  public checkAgendaVersion(agendaVersion: AgendaVersion) {
    let response;
    this.dsmCityUpdateService.checkAgendaVersion(agendaVersion)
      .subscribe((res) => response = res,
        (error) => {
          console.log("check agenda version failed");
        }, () => {
          agendaVersion.checked = true;
        });
  }

}
