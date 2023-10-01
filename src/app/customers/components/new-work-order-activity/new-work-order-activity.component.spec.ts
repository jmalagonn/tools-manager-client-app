import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkOrderActivityComponent } from './new-work-order-activity.component';

describe('NewWorkOrderActivityComponent', () => {
  let component: NewWorkOrderActivityComponent;
  let fixture: ComponentFixture<NewWorkOrderActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkOrderActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWorkOrderActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
