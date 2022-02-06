import {Component, Input} from '@angular/core';
import {Email} from "../../models/Email.model";

@Component({
  selector: 'app-email-display',
  templateUrl: './email-display.component.html',
  styleUrls: ['./email-display.component.css']
})
export class EmailDisplayComponent {
  @Input() public email: Email = null;

  public get toDisplay(): string {
    return this.email.to.replace(/,/g, ", ");
  }
}
