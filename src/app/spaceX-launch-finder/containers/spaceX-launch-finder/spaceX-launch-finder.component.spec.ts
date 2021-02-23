import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SpaceXLaunchFinderComponent} from './spaceX-launch-finder.component';
import {SpaceXLaunchFinderService} from '../../spaceX-launch-finder.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MissionDetailsComponent} from '../../components/mission-details/mission-details.component';
import {MissionSearchComponent} from '../../components/mission-search/mission-search.component';
import {MissionSortComponent} from '../../components/mission-sort/mission-sort.component';
import {FilterPipe} from '../../utils/filter.pipe';
import {SortByPipe} from '../../utils/sort.pipe';
import {of} from 'rxjs';

describe('SpaceXLaunchFinder', () => {
  let component: SpaceXLaunchFinderComponent;
  let fixture: ComponentFixture<SpaceXLaunchFinderComponent>;

  const LatestLaunchData = {fairings: {reused: null, recovery_attempt: true, recovered: true, ships: ['5ea6ed2e080df4000697c908', '5ea6ed2e080df4000697c907']}, links: {patch: {small: 'https://imgur.com/BrW201S.png', large: 'https://imgur.com/573IfGk.png'}, reddit: {campaign: 'https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/', launch: 'https://www.reddit.com/r/spacex/comments/ljkh7l/rspacex_starlink19_official_launch_discussion/', media: 'https://www.reddit.com/r/spacex/comments/lkwllg/starlink19_media_thread_photographer_contest/', recovery: 'https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/'}, flickr: {small: [], original: ['https://live.staticflickr.com/65535/50949943433_87e3002307_o.jpg']}, presskit: null, webcast: 'https://youtu.be/L0dkyV09Zso', youtube_id: 'L0dkyV09Zso', article: 'https://spaceflightnow.com/2021/02/16/spacex-successfully-deploys-60-more-starlink-satellites-but-loses-booster-on-descent/', wikipedia: 'https://en.wikipedia.org/wiki/Starlink'}, static_fire_date_utc: '2021-02-13T18:17:00.000Z', static_fire_date_unix: 1613240220, tbd: false, net: false, window: null, rocket: '5e9d0d95eda69973a809d1ec', success: true, details: 'This mission launches the eighteenth batch of operational Starlink satellites, which are version 1.0, from SLC-40. It is the nineteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.', crew: [], ships: ['5ea6ed30080df4000697c913'], capsules: [], payloads: ['600f9bc08f798e2a4d5f97a4'], launchpad: '5e9e4501f509094ba4566f84', auto_update: true, launch_library_id: '985f1cc1-82c1-4a89-b2cc-e9dc91829a0e', failures: [], flight_number: 117, name: 'Starlink-19 (v1.0)', date_utc: '2021-02-16T03:59:00.000Z', date_unix: 1613447940, date_local: '2021-02-15T22:59:00-05:00', date_precision: 'hour', upcoming: false, cores: [{core: '5e9e28a7f359187afd3b2662', flight: 6, gridfins: true, legs: true, reused: true, landing_attempt: true, landing_success: false, landing_type: 'ASDS', landpad: '5e9e3032383ecb6bb234e7ca'}], id: '600f9a5e8f798e2a4d5f979c'};
  const PastLaunchData = [{fairings: {reused: false, recovery_attempt: false, recovered: false, ships: []}, links: {patch: {small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png', large: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png'}, reddit: {campaign: null, launch: null, media: null, recovery: null}, flickr: {small: [], original: []}, presskit: null, webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88', youtube_id: '0a_00nJ_Y88', article: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html', wikipedia: 'https://en.wikipedia.org/wiki/DemoSat'}, static_fire_date_utc: '2006-03-17T00:00:00.000Z', static_fire_date_unix: 1142553600, tbd: false, net: false, window: 0, rocket: '5e9d0d95eda69955f709d1eb', success: false, details: 'Engine failure at 33 seconds and loss of vehicle', crew: [], ships: [], capsules: [], payloads: ['5eb0e4b5b6c3bb0006eeb1e1'], launchpad: '5e9e4502f5090995de566f86', auto_update: true, launch_library_id: null, failures: [{time: 33, altitude: null, reason: 'merlin engine failure'}], flight_number: 1, name: 'FalconSat', date_utc: '2006-03-24T22:30:00.000Z', date_unix: 1143239400, date_local: '2006-03-25T10:30:00+12:00', date_precision: 'hour', upcoming: false, cores: [{core: '5e9e289df35918033d3b2623', flight: 1, gridfins: false, legs: false, reused: false, landing_attempt: false, landing_success: null, landing_type: null, landpad: null}], id: '5eb87cd9ffd86e000604b32a'}, {fairings: {reused: false, recovery_attempt: false, recovered: false, ships: []}, links: {patch: {small: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png', large: 'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png'}, reddit: {campaign: null, launch: null, media: null, recovery: null}, flickr: {small: [], original: []}, presskit: null, webcast: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc', youtube_id: 'Lk4zQ2wP-Nc', article: 'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html', wikipedia: 'https://en.wikipedia.org/wiki/DemoSat'}, static_fire_date_utc: null, static_fire_date_unix: null, tbd: false, net: false, window: 0, rocket: '5e9d0d95eda69955f709d1eb', success: false, details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage', crew: [], ships: [], capsules: [], payloads: ['5eb0e4b6b6c3bb0006eeb1e2'], launchpad: '5e9e4502f5090995de566f86', auto_update: true, launch_library_id: null, failures: [{time: 301, altitude: 289, reason: 'harmonic oscillation leading to premature engine shutdown'}], flight_number: 2, name: 'DemoSat', date_utc: '2007-03-21T01:10:00.000Z', date_unix: 1174439400, date_local: '2007-03-21T13:10:00+12:00', date_precision: 'hour', upcoming: false, cores: [{core: '5e9e289ef35918416a3b2624', flight: 1, gridfins: false, legs: false, reused: false, landing_attempt: false, landing_success: null, landing_type: null, landpad: null}], id: '5eb87cdaffd86e000604b32b'}, {fairings: {reused: false, recovery_attempt: false, recovered: false, ships: []}, links: {patch: {small: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png', large: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png'}, reddit: {campaign: null, launch: null, media: null, recovery: null}, flickr: {small: [], original: []}, presskit: null, webcast: 'https://www.youtube.com/watch?v=v0w9p3U8860', youtube_id: 'v0w9p3U8860', article: 'http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary', wikipedia: 'https://en.wikipedia.org/wiki/Trailblazer_(satellite)'}, static_fire_date_utc: null, static_fire_date_unix: null, tbd: false, net: false, window: 0, rocket: '5e9d0d95eda69955f709d1eb', success: false, details: 'Residual stage 1 thrust led to collision between stage 1 and stage 2', crew: [], ships: [], capsules: [], payloads: ['5eb0e4b6b6c3bb0006eeb1e3', '5eb0e4b6b6c3bb0006eeb1e4'], launchpad: '5e9e4502f5090995de566f86', auto_update: true, launch_library_id: null, failures: [{time: 140, altitude: 35, reason: 'residual stage-1 thrust led to collision between stage 1 and stage 2'}], flight_number: 3, name: 'Trailblazer', date_utc: '2008-08-03T03:34:00.000Z', date_unix: 1217734440, date_local: '2008-08-03T15:34:00+12:00', date_precision: 'hour', upcoming: false, cores: [{core: '5e9e289ef3591814873b2625', flight: 1, gridfins: false, legs: false, reused: false, landing_attempt: false, landing_success: null, landing_type: null, landpad: null}], id: '5eb87cdbffd86e000604b32c'}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SpaceXLaunchFinderComponent,
        MissionDetailsComponent,
        MissionSearchComponent,
        MissionSortComponent,
        FilterPipe,
        SortByPipe
      ],
      imports: [CommonModule, HttpClientModule, FormsModule],
      providers: [{provide: SpaceXLaunchFinderService, useValue: {
          getPastLaunches: () => of(PastLaunchData),
          getLatestLaunch: () => of(LatestLaunchData)
        }}],

    }).compileComponents();
  });

  beforeEach(() => { // 3
    fixture = TestBed.createComponent(SpaceXLaunchFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the spaceX launch finder component', () => {
    expect(component).toBeTruthy();
  });

  it('should have latest launch item from spaceX launch service in component', () => {
    fixture.detectChanges();
    // @ts-ignore
    expect(component.latestLaunch).toEqual(LatestLaunchData);
  });

  it('should have past launches items from spaceX launch service in component', () => {
    fixture.detectChanges();
    // @ts-ignore
    expect(component.launches).toEqual(PastLaunchData);
  });

  it('should filter launches when filter handler is called', () => {
    // Arrange
    fixture.detectChanges();
    component.handleFilter('DemoSat');
    fixture.detectChanges();

    // Act
    const filteredCardList = fixture.nativeElement.querySelectorAll('.c-card');

    // Assert
    expect(filteredCardList.length).toBe(1);
  });

  it('should sort launches by name desc when sort handler is called', () => {
    // Arrange
    fixture.detectChanges();
    component.handleSort('name');
    fixture.detectChanges();

    // Act
    const filteredCardList = fixture.nativeElement.querySelectorAll('.c-card');

    // Assert
    expect(filteredCardList[0].querySelector('h2 > a').textContent).toBe('Trailblazer');
  });

});
