import {Component} from '@angular/core';
import {ResourceItem, RESOURCES} from "../../constants/resource.constants";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  public resources: ResourceItem[] = RESOURCES;
}
