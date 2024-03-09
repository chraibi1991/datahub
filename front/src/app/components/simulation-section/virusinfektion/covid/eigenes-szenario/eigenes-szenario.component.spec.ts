import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenesSzenarioComponent } from './eigenes-szenario.component';

describe('EigenesSzenarioComponent', () => {
  let component: EigenesSzenarioComponent;
  let fixture: ComponentFixture<EigenesSzenarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EigenesSzenarioComponent]
    });
    fixture = TestBed.createComponent(EigenesSzenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
