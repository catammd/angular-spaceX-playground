import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchFinderService } from '../../spaceX-launch-finder.service';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'spacex-launch-finder',
  styleUrls: ['spacex-launch-finder.component.scss'],
  template: `
    <h1>Latest Space X Launch</h1>
    <mission-details [mission]="latestLaunch"></mission-details>
    <h3>All Space X Launches</h3>
    <mission-details *ngFor="let launch of launches" [mission]="launch">
    </mission-details>
  `,
})
export class SpaceXLaunchFinderComponent implements OnInit {
  launches: LaunchInterface[];
  latestLaunch: LaunchInterface;

  constructor(private launchFinderService: SpaceXLaunchFinderService) {}
  ngOnInit() {
    this.launchFinderService
      .getLaunches()
      .subscribe((data: LaunchInterface[]) => {
        this.launches = data;
      });

    this.launchFinderService
      .getLatestLaunch()
      .subscribe((data: LaunchInterface) => {
        this.latestLaunch = data;
        console.log('Latest launch: ', this.latestLaunch);
      });
  }
}
