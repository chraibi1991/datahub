import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationSectionComponent } from './simulation-section.component';

describe('SimulationSectionComponent', () => {
  let component: SimulationSectionComponent;
  let fixture: ComponentFixture<SimulationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationSectionComponent]
    });
    fixture = TestBed.createComponent(SimulationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
