import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastukturComponent } from './infrastuktur.component';

describe('InfrastukturComponent', () => {
  let component: InfrastukturComponent;
  let fixture: ComponentFixture<InfrastukturComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrastukturComponent]
    });
    fixture = TestBed.createComponent(InfrastukturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
