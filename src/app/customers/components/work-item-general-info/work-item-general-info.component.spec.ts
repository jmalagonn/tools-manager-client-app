import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemGeneralInfoComponent } from './work-item-general-info.component';

describe('WorkItemGeneralInfoComponent', () => {
  let component: WorkItemGeneralInfoComponent;
  let fixture: ComponentFixture<WorkItemGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkItemGeneralInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkItemGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
