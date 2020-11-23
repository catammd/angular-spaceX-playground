import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchFinderService } from '../../spaceX-launch-finder.service';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'spacex-launch-finder',
  styleUrls: ['spaceX-launch-finder.component.scss'],
  template: `
    <h1>Latest Space X Launch</h1>
    <div class="c-latest-mission">
      <mission-details [mission]="latestLaunch"></mission-details>
    </div>
    <h3>All Space X Launches</h3>
    <div class="c-text-input">
      <input
        class="form-control"
        type="text"
        placeholder="Search for a launch"
        [(ngModel)]="searchText"
      />
    </div>
    <div class="c-card-container">
      <mission-details
        class="c-card"
        *ngFor="
          let launch of launches
            | filter: searchText
            | sortBy: 'desc':'date_utc'
        "
        [mission]="launch"
      >
      </mission-details>
    </div>
  `,
})
export class SpaceXLaunchFinderComponent implements OnInit {
  launches: LaunchInterface[];
  latestLaunch: LaunchInterface;
  searchText: string;

  constructor(private launchFinderService: SpaceXLaunchFinderService) {}
  ngOnInit() {
    this.launchFinderService.getPastLaunches().subscribe(
      (data: LaunchInterface[]) => {
        this.launches = data;
      },
      (error: Error) => {
        //Error handling
        console.log(error.message);
      }
    );

    this.launchFinderService.getLatestLaunch().subscribe(
      (data: LaunchInterface) => {
        this.latestLaunch = data;
      },
      (error: Error) => {
        //Error handling
        console.log(error.message);
      }
    );
  }
}
