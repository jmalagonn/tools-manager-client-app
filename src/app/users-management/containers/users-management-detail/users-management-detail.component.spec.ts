import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersManagementDetailComponent } from './users-management-detail.component';

describe('UsersManagementDetailComponent', () => {
  let component: UsersManagementDetailComponent;
  let fixture: ComponentFixture<UsersManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersManagementDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
