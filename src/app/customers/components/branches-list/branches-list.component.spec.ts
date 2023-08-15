import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBranchModalComponent } from './add-branch-modal.component';

describe('AddBranchModalComponent', () => {
  let component: AddBranchModalComponent;
  let fixture: ComponentFixture<AddBranchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBranchModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBranchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
