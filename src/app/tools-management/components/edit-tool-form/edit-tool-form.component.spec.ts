import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToolFormComponent } from './edit-tool-form.component';

describe('EditToolFormComponent', () => {
  let component: EditToolFormComponent;
  let fixture: ComponentFixture<EditToolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditToolFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditToolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
