import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemDetailModalComponent } from './work-item-detail-modal.component';

describe('WorkItemDetailModalComponent', () => {
  let component: WorkItemDetailModalComponent;
  let fixture: ComponentFixture<WorkItemDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkItemDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkItemDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
