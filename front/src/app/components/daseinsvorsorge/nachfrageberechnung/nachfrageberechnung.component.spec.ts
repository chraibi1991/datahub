import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NachfrageberechnungComponent } from './nachfrageberechnung.component';

describe('NachfrageberechnungComponent', () => {
  let component: NachfrageberechnungComponent;
  let fixture: ComponentFixture<NachfrageberechnungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NachfrageberechnungComponent]
    });
    fixture = TestBed.createComponent(NachfrageberechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
