import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumMainComponent } from './raum-main.component';

describe('RaumMainComponent', () => {
  let component: RaumMainComponent;
  let fixture: ComponentFixture<RaumMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaumMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
