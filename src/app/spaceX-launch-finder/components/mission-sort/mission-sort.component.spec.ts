import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MissionSortComponent} from './mission-sort.component';

describe('MissionSortComponent', () => {
  let component: MissionSortComponent;
  let fixture: ComponentFixture<MissionSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MissionSortComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => { // 3
    fixture = TestBed.createComponent(MissionSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the mission search component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with predefined dropdown options', () => {
    // The component has 4 predefined sort by values: date, name, fire date, flight number
    expect(component.sortDropDownData.length).toBe(4);
  });

  it('should correctly @Output sort value in the component', () => {
    // Arrange
    spyOn(component.sort, 'emit');
    const selectedOptionText = fixture.nativeElement.querySelector('select').selected;

    // Act
    component.onOptionsSelected(selectedOptionText);

    // Assert
    expect(component.sort.emit).toHaveBeenCalledWith(selectedOptionText);
  });

});
