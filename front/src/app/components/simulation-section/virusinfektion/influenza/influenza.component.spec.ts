import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaComponent } from './influenza.component';

describe('InfluenzaComponent', () => {
  let component: InfluenzaComponent;
  let fixture: ComponentFixture<InfluenzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfluenzaComponent]
    });
    fixture = TestBed.createComponent(InfluenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
