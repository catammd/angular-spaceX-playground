import { BrowserModule } from '@angular/platform-browser'; // Since we want to run your app in a browser
import { NgModule } from '@angular/core';

// We don't want to create tons of components and list them all so we are grouping them into their corresponding module
import { SpaceXLaunchFinderModule } from './spaceX-launch-finder/spaceX-launch-finder.module';

import { AppComponent } from './app.component';
// Tell angular that this module is an Angular module
@NgModule({
  // Register the AppComponent
  declarations: [AppComponent],
  imports: [BrowserModule, SpaceXLaunchFinderModule],
  providers: [],
  // Tell the module to bootstrap our AppComponent so it can be used in index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
