import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchFinderService } from '../../spaceX-launch-finder.service';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'spacex-launch-finder',
  styleUrls: ['spacex-launch-finder.component.scss'],
  template: `
    <h3>All Space X Launches</h3>
    <mission-details *ngFor="let launch of launches" [mission]="launch">
    </mission-details>
  `,
})
export class SpaceXLaunchFinderComponent implements OnInit {
  launches: LaunchInterface[];
  constructor(private launchFinderService: SpaceXLaunchFinderService) {}
  ngOnInit() {
    this.launches = this.launchFinderService.getLaunches();
  }
}
