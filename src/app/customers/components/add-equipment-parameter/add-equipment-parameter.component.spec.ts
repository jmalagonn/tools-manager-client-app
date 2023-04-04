import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentParameterComponent } from './add-equipment-parameter.component';

describe('AddEquipmentParameterComponent', () => {
  let component: AddEquipmentParameterComponent;
  let fixture: ComponentFixture<AddEquipmentParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipmentParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
