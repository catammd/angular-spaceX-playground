import { Component, Input } from '@angular/core';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'mission-details',
  styleUrls: ['mission-details.component.scss'],
  template: `
    <div class="c-card__img">
      <img
        *ngIf="mission?.links?.patch?.small"
        src="{{ mission?.links?.patch?.small }}"
        onError="this.src='https://via.placeholder.com/360x360?text=Patch+Not+Available'"
      />
      <img
        *ngIf="!mission?.links?.patch?.small"
        src="https://via.placeholder.com/360x360?text=Patch+Not+Available"
      />
    </div>
    <div class="c-card__text">
      <h2>
        <a
          href="{{ mission?.links?.article }}"
          aria-describedby="desc-a-card"
          >{{ mission?.name }}</a
        >
      </h2>
      <p>Flight number: {{ mission?.flight_number }}</p>
      <p>Date: {{ mission?.date_utc | date: 'd MMMM y' }}</p>
      <p class="c-card__text-details">{{ mission?.details }}</p>
      <span class="c-btn c-btn--primary" aria-hidden="true" id="desc-a-card"
        >Read article →</span
      >
    </div>
  `,
})
export class MissionDetailsComponent {
  @Input()
  mission: LaunchInterface;
}
