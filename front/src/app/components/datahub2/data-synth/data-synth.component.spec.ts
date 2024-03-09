import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSynthComponent } from './data-synth.component';

describe('DataSynthComponent', () => {
  let component: DataSynthComponent;
  let fixture: ComponentFixture<DataSynthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSynthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSynthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
