import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//We don't want to create tons of components and list them all so we are grouping them into their corresponding module
import { SpaceXLaunchFinderModule } from './spaceX-launch-finder/spaceX-launch-finder.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpaceXLaunchFinderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
