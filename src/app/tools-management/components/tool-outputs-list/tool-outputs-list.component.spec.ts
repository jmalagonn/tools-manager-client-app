import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsOutputListComponent } from './tool-outputs-list.component';

describe('ToolsOutputListComponent', () => {
  let component: ToolsOutputListComponent;
  let fixture: ComponentFixture<ToolsOutputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsOutputListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsOutputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
