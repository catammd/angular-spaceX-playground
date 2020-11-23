import { Component, Input } from '@angular/core';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'mission-details',
  styleUrls: ['mission-details.component.scss'],
  template: `<ul>
    <li>
      Mission details
      <p>Launch success: {{ mission?.success }}</p>
      <p>Name: {{ mission?.name }}</p>
      <p>Flight number: {{ mission?.flight_number }}</p>
      <p>Date: {{ mission?.date_utc | date: 'd MMMM y' }}</p>
    </li>
  </ul> `,
})
export class MissionDetailsComponent {
  @Input()
  mission: LaunchInterface;
}
