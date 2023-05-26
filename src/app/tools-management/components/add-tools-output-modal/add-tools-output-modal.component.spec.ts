import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToolsOutputModalComponent } from './add-tools-output-modal.component';

describe('AddToolsOutputModalComponent', () => {
  let component: AddToolsOutputModalComponent;
  let fixture: ComponentFixture<AddToolsOutputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToolsOutputModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToolsOutputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
