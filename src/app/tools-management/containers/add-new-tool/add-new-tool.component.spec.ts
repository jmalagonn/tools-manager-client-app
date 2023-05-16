import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewToolComponent } from './add-new-tool.component';

describe('AddNewToolComponent', () => {
  let component: AddNewToolComponent;
  let fixture: ComponentFixture<AddNewToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
