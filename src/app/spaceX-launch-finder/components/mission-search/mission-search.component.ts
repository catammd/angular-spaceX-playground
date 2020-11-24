import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'mission-search',
  styleUrls: ['mission-search.component.scss'],
  template: `
    <div class="c-text-input">
      <input
        class="form-control"
        type="text"
        placeholder="Search for a launch"
        [value]="searchText"
        (input)="onFilterChange(search.value)"
        #search
      />
    </div>
  `,
})
export class MissionSearchComponent {
  @Input()
  searchText: string;

  @Output()
  filter: EventEmitter<any> = new EventEmitter();

  onFilterChange(value: string) {
    this.searchText = value;
    console.log(this.searchText);
  }
}
