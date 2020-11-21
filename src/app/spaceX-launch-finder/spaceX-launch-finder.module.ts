import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXLaunchFinderComponent } from './containers/spaceX-launch-finder/spaceX-launch-finder-component';

//Pass in the config object
@NgModule({
  //it will hold all of the components related to this module
  declarations: [SpaceXLaunchFinderComponent],
  imports: [CommonModule],
  exports: [SpaceXLaunchFinderComponent],
})
export class SpaceXLaunchFinderModule {}
