import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumAnalysenComponent } from './raum-analysen.component';

describe('RaumAnalysenComponent', () => {
  let component: RaumAnalysenComponent;
  let fixture: ComponentFixture<RaumAnalysenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaumAnalysenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaumAnalysenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
