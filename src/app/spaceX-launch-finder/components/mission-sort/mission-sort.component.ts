import { Component, Output, EventEmitter } from '@angular/core';
import { SortInterface } from '../../models/sort.interface';
@Component({
  selector: 'mission-sort',
  styleUrls: ['mission-sort.component.scss'],
  template: `
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
  `,
})
export class MissionSortComponent {
  sortDropDownData: Array<SortInterface> = [];

  @Output()
  sort: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    //Sort dropdown setup
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
  }
  onOptionsSelected(value: string) {
    this.sort.emit(value);
  }
}
