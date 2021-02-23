import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MissionDetailsComponent} from './mission-details.component';

describe('MissionDetailsComponent', () => {
  let component: MissionDetailsComponent;
  let fixture: ComponentFixture<MissionDetailsComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MissionDetailsComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => { // 3
    fixture = TestBed.createComponent(MissionDetailsComponent);
    component = fixture.componentInstance;
    component.mission = {
      details: '',
      flight_number: 110,
      launch_site: undefined,
      name: 'Starlink-19 (v1.0)',
      date_utc: '2021-02-16T03:59:00.000Z',
      rocket: undefined,
      ships: [],
      static_fire_date_unix: 0,
      static_fire_date_utc: '',
      success: false,
      telemetry: undefined,
      timeline: undefined,
      links: {
        video_link: '',
        campaign: '',
        flickr_images: [],
        launch: '',
        patch: undefined,
        presskit: '',
        recovery: '',
        reddit: '',
        wikipedia: '',
        youtube_id: '',
        article: 'Test_link'
      }
    };
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the mission title value', () => {
    expect(compiled.querySelector('h2 > a').textContent).toBe('Starlink-19 (v1.0)');
  });

  it('should correctly render the mission flight number', () => {
    expect(compiled.querySelector('.c-card__text > p:nth-child(2)').textContent).toBe('Flight number: 110');
  });

  it('should correctly render the flight date', () => {
    expect(compiled.querySelector('.c-card__text > p:nth-child(3)').textContent).toBe('Date: 16 February 2021');
  });

  it('should correctly render the mission success element', () => {
    expect(compiled.querySelector('.c-card__text > span').textContent).toBe('Launch Unsuccessful');
  });

  it('should correctly render the button to that link to mission article', () => {
    expect(compiled.querySelector('.c-card__text > .c-btn--primary').href).toContain('Test_link');
  });

  it('should correctly render the button text that links to mission article', () => {
    expect(compiled.querySelector('.c-card__text > .c-btn--primary').textContent).toBe('Read article →');
  });
});
