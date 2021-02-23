import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mission-search',
  styleUrls: ['mission-search.component.scss'],
  template: `
    <input
      class="form-control"
      type="text"
      placeholder="Search for a launch"
      [ngModel]="searchText"
      (input)="onSearch(search.value)"
      #search
    />
  `,
})
export class MissionSearchComponent {
  searchText: string;

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  onSearch(value: string): void {
    this.searchText = value;
    // Inform the parent that filtering occurred
    this.filter.emit(this.searchText);
  }
}
