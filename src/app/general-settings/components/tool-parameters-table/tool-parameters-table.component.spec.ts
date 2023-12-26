import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolParametersTableComponent } from './tool-parameters-table.component';

describe('ToolParametersTableComponent', () => {
  let component: ToolParametersTableComponent;
  let fixture: ComponentFixture<ToolParametersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolParametersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolParametersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
