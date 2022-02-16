import {Component} from '@angular/core';
import {ResourceItem, IOWA_RESOURCES, COMMUNITY_RESOURCES} from "../../constants/resource.constants";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  public stateResources: ResourceItem[] = IOWA_RESOURCES;
  public communityResources: ResourceItem[] = COMMUNITY_RESOURCES;
}
