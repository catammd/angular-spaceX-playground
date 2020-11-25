import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Containers
import { SpaceXLaunchFinderComponent } from './containers/spaceX-launch-finder/spaceX-launch-finder-component';
//Components
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
import { MissionSearchComponent } from './components/mission-search/mission-search.component';
import { MissionSortComponent } from './components/mission-sort/mission-sort.component';
//Service
import { SpaceXLaunchFinderService } from './spaceX-launch-finder.service';
//Utils
import { FilterPipe } from './utils/filter.pipe';
import { SortByPipe } from './utils/sort.pipe';

//Pass in the config object
@NgModule({
  //Holds all of the components related to this module
  declarations: [
    SpaceXLaunchFinderComponent,
    MissionDetailsComponent,
    MissionSearchComponent,
    MissionSortComponent,
    FilterPipe,
    SortByPipe,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [SpaceXLaunchFinderComponent],
  providers: [SpaceXLaunchFinderService],
})
export class SpaceXLaunchFinderModule {}
