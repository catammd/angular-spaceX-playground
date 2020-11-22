import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Containers
import { SpaceXLaunchFinderComponent } from './containers/spaceX-launch-finder/spaceX-launch-finder-component';
//Components
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
//Service
import { SpaceXLaunchFinderService } from './spaceX-launch-finder.service';
//Filter
import { FilterPipe } from './filter.pipe';

//Pass in the config object
@NgModule({
  //Holds all of the components related to this module
  declarations: [
    SpaceXLaunchFinderComponent,
    MissionDetailsComponent,
    FilterPipe,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [SpaceXLaunchFinderComponent],
  providers: [SpaceXLaunchFinderService],
})
export class SpaceXLaunchFinderModule {}
