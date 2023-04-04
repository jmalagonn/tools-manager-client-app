import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEquipmentParameterComponent } from './add-new-equipment-parameter.component';

describe('AddNewEquipmentParameterComponent', () => {
  let component: AddNewEquipmentParameterComponent;
  let fixture: ComponentFixture<AddNewEquipmentParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEquipmentParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewEquipmentParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
