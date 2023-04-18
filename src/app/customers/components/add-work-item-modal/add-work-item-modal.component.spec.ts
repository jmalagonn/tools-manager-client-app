import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkItemModalComponent } from './add-work-item-modal.component';

describe('AddWorkItemModalComponent', () => {
  let component: AddWorkItemModalComponent;
  let fixture: ComponentFixture<AddWorkItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
