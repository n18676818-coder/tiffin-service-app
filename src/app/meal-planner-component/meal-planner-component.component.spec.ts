import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlannerComponentComponent } from './meal-planner-component.component';

describe('MealPlannerComponentComponent', () => {
  let component: MealPlannerComponentComponent;
  let fixture: ComponentFixture<MealPlannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPlannerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPlannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
