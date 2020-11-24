import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchFinderService } from '../../spaceX-launch-finder.service';
import { LaunchInterface } from '../../models/launch.interface';
import { SortInterface } from '../../models/sort.interface';

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
      <div class="c-select">
        Sort by:
        <select
          class="c-select-option"
          #mySelect
          (change)="onOptionsSelected(mySelect.value)"
        >
          <option
            class="option"
            *ngFor="let option of sortDropDownData"
            [value]="option.value"
          >
            {{ option.selectOptionText }}
          </option>
        </select>
      </div>
    </div>
    <div class="c-card-container">
      <mission-details
        class="c-card"
        *ngFor="
          let launch of launches | filter: searchText | sortBy: 'desc':sortValue
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
  sortDropDownData: Array<SortInterface> = [];
  searchText: string;
  sortValue: string;

  constructor(private launchFinderService: SpaceXLaunchFinderService) {}

  ngOnInit() {
    this.launchFinderService.getPastLaunches().subscribe(
      (data: LaunchInterface[]) => {
        this.launches = data;
        this.setupSortDropdown();
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
  onOptionsSelected(value: string) {
    this.sortValue = value;
  }
  setupSortDropdown = () => {
    this.sortDropDownData.push({
      value: 'date_utc',
      selectOptionText: 'Latest launch date',
    });
    this.sortDropDownData.push({
      value: 'name',
      selectOptionText: 'Latest launch name',
    });
    this.sortDropDownData.push({
      value: 'static_fire_date_utc',
      selectOptionText: 'Latest launch fire date',
    });
    this.sortDropDownData.push({
      value: 'flight_number',
      selectOptionText: 'Latest flight number',
    });
  };
}
