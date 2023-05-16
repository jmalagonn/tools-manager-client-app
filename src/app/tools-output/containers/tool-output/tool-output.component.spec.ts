import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolOutputComponent } from './tool-output.component';

describe('ToolOutputComponent', () => {
  let component: ToolOutputComponent;
  let fixture: ComponentFixture<ToolOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
