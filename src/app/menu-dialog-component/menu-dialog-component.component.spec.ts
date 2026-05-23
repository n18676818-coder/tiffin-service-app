import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDialogComponentComponent } from './menu-dialog-component.component';

describe('MenuDialogComponentComponent', () => {
  let component: MenuDialogComponentComponent;
  let fixture: ComponentFixture<MenuDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDialogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
