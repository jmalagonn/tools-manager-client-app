import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewParameterComponent } from './add-new-parameter.component';

describe('AddNewParameterComponent', () => {
  let component: AddNewParameterComponent;
  let fixture: ComponentFixture<AddNewParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
