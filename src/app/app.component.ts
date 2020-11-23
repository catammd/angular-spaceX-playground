import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content" role="main">
      <spacex-launch-finder></spacex-launch-finder>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spacex-app';
}
