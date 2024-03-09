import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaseinsvorsorgeOverviewComponent } from './daseinsvorsorge-overview.component';

describe('DaseinsvorsorgeOverviewComponent', () => {
  let component: DaseinsvorsorgeOverviewComponent;
  let fixture: ComponentFixture<DaseinsvorsorgeOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaseinsvorsorgeOverviewComponent]
    });
    fixture = TestBed.createComponent(DaseinsvorsorgeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
