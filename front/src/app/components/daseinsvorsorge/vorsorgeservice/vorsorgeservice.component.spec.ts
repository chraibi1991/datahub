import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorsorgeserviceComponent } from './vorsorgeservice.component';

describe('VorsorgeserviceComponent', () => {
  let component: VorsorgeserviceComponent;
  let fixture: ComponentFixture<VorsorgeserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VorsorgeserviceComponent]
    });
    fixture = TestBed.createComponent(VorsorgeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
