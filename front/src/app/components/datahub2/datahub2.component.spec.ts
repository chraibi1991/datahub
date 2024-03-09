import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datahub2Component } from './datahub2.component';

describe('Datahub2Component', () => {
  let component: Datahub2Component;
  let fixture: ComponentFixture<Datahub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datahub2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datahub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
