import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachConfigComponent } from './reach-config.component';

describe('ReachConfigComponent', () => {
  let component: ReachConfigComponent;
  let fixture: ComponentFixture<ReachConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
