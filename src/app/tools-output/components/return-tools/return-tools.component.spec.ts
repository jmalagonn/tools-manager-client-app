import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToolsComponent } from './return-tools.component';

describe('ReturnToolsComponent', () => {
  let component: ReturnToolsComponent;
  let fixture: ComponentFixture<ReturnToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
