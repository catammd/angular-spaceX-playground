import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchFinderService } from '../../spaceX-launch-finder.service';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'spacex-launch-finder',
  styleUrls: ['spaceX-launch-finder.component.scss'],
  template: `
    <h1>Latest Space X Launch</h1>
    <mission-details [mission]="latestLaunch"></mission-details>
    <h3>All Space X Launches</h3>

    <input
      class="form-control"
      type="text"
      [(ngModel)]="searchText"
      placeholder="Search"
    />
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
