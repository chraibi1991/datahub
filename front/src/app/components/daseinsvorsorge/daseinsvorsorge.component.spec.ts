import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaseinsvorsorgeComponent } from './daseinsvorsorge.component';

describe('DaseinsvorsorgeComponent', () => {
  let component: DaseinsvorsorgeComponent;
  let fixture: ComponentFixture<DaseinsvorsorgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaseinsvorsorgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaseinsvorsorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
