import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSynthOverviewComponent } from './data-synth-overview.component';

describe('DataSynthOverviewComponent', () => {
  let component: DataSynthOverviewComponent;
  let fixture: ComponentFixture<DataSynthOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSynthOverviewComponent]
    });
    fixture = TestBed.createComponent(DataSynthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
