import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolParametersComponent } from './tool-parameters.component';

describe('ToolParametersComponent', () => {
  let component: ToolParametersComponent;
  let fixture: ComponentFixture<ToolParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
