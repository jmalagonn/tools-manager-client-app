import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkItemActivityLogComponent } from './new-work-item-activity-log.component';

describe('NewWorkItemActivityLogComponent', () => {
  let component: NewWorkItemActivityLogComponent;
  let fixture: ComponentFixture<NewWorkItemActivityLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkItemActivityLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWorkItemActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
