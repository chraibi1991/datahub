import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusinfektionComponent } from './virusinfektion.component';

describe('VirusinfektionComponent', () => {
  let component: VirusinfektionComponent;
  let fixture: ComponentFixture<VirusinfektionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirusinfektionComponent]
    });
    fixture = TestBed.createComponent(VirusinfektionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
