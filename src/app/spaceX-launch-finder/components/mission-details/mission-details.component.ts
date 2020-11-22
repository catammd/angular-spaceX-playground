import { Component, Input } from '@angular/core';
import { LaunchInterface } from '../../models/launch.interface';

@Component({
  selector: 'mission-details',
  template: `<ul>
    <li>
      Mission details
      <p>Launch success: {{ mission.success }}</p>
      <p>Name: {{ mission.name }}</p>
      <p>Flight number: {{ mission.flight_number }}</p>
    </li>
  </ul> `,
})
export class MissionDetailsComponent {
  @Input()
  mission: LaunchInterface;
}
