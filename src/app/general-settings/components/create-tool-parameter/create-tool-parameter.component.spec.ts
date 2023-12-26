import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToolParameterComponent } from './create-tool-parameter.component';

describe('CreateToolParameterComponent', () => {
  let component: CreateToolParameterComponent;
  let fixture: ComponentFixture<CreateToolParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateToolParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateToolParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
