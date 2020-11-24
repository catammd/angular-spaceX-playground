import { Component, Input } from '@angular/core';

@Component({
  selector: 'mission-sort',
  styleUrls: ['mission-sort.component.scss'],
  template: `
    <div class="c-text-input">
      <input
        class="form-control"
        type="text"
        placeholder="Search for a launch"
        [(ngModel)]="searchText"
      />
    </div>
  `,
})
export class MissionSortComponent {
  @Input()
  searchText: string;
}
