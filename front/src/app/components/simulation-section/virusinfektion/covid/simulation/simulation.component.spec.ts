import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationComponent } from './simulation.component';

describe('SimulationComponent', () => {
  let component:  SimulationComponent;
  let fixture: ComponentFixture< SimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationComponent]
    });
    fixture = TestBed.createComponent( SimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});