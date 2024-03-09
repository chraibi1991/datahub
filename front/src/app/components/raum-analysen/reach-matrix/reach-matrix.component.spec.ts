import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachMatrixComponent } from './reach-matrix.component';

describe('ReachMatrixComponent', () => {
  let component: ReachMatrixComponent;
  let fixture: ComponentFixture<ReachMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
