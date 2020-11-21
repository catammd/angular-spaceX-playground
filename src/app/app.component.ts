import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="app"><spacex-launch-finder></spacex-launch-finder></div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spacex-app';
}
