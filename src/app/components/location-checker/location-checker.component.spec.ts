import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCheckerComponent } from './location-checker.component';

describe('LocationCheckerComponent', () => {
  let component: LocationCheckerComponent;
  let fixture: ComponentFixture<LocationCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
