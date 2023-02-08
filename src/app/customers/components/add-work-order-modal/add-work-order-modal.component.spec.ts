import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkOrderModalComponent } from './add-work-order-modal.component';

describe('AddWorkOrderModalComponent', () => {
  let component: AddWorkOrderModalComponent;
  let fixture: ComponentFixture<AddWorkOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkOrderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
