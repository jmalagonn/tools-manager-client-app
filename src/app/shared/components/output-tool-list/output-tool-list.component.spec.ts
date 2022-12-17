import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputToolListComponent } from './output-tool-list.component';

describe('OutputToolListComponent', () => {
  let component: OutputToolListComponent;
  let fixture: ComponentFixture<OutputToolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputToolListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputToolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
