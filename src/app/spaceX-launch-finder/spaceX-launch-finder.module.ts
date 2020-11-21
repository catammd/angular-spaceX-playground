import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Containers
import { SpaceXLaunchFinderComponent } from './containers/spaceX-launch-finder/spaceX-launch-finder-component';
//Components
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
//Pass in the config object
@NgModule({
  //it will hold all of the components related to this module
  declarations: [SpaceXLaunchFinderComponent, MissionDetailsComponent],
  imports: [CommonModule],
  exports: [SpaceXLaunchFinderComponent],
})
export class SpaceXLaunchFinderModule {}
