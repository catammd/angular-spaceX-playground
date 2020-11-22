import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//Containers
import { SpaceXLaunchFinderComponent } from './containers/spaceX-launch-finder/spaceX-launch-finder-component';
//Components
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
//Service
import { SpaceXLaunchFinderService } from './spaceX-launch-finder.service';

//Pass in the config object
@NgModule({
  //it will hold all of the components related to this module
  declarations: [SpaceXLaunchFinderComponent, MissionDetailsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [SpaceXLaunchFinderComponent],
  providers: [SpaceXLaunchFinderService],
})
export class SpaceXLaunchFinderModule {}
