import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkOrderFormComponent } from './add-work-order-form.component';

describe('AddWorkOrderFormComponent', () => {
  let component: AddWorkOrderFormComponent;
  let fixture: ComponentFixture<AddWorkOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
