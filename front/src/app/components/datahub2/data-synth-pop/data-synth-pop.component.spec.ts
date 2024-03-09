import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSynthPopComponent } from './data-synth-pop.component';

describe('DataSynthPopComponent', () => {
  let component: DataSynthPopComponent;
  let fixture: ComponentFixture<DataSynthPopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSynthPopComponent]
    });
    fixture = TestBed.createComponent(DataSynthPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
