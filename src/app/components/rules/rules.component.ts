import {Component} from "@angular/core";
import {CookieHelper} from "../../utilities/cookie.util";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.scss"]
})
export class RulesComponent {
  public get isAdmin(): boolean {
    return CookieHelper.admin;
  }
}
