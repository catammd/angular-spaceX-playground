import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MissionSearchComponent} from './mission-search.component';

describe('MissionSearchComponent', () => {
  let component: MissionSearchComponent;
  let fixture: ComponentFixture<MissionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MissionSearchComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => { // 3
    fixture = TestBed.createComponent(MissionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the mission search component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly @Output search value in the component', () => {
    // Arrange
    spyOn(component.filter, 'emit');
    fixture.nativeElement.querySelector('input').value = 'search query';
    const inputText = fixture.nativeElement.querySelector('input').value;

    // Act
    component.onSearch(inputText);

    // Assert
    expect(component.filter.emit).toHaveBeenCalledWith(inputText);
  });
});
