import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRegioComponent } from './data-regio.component';

describe('DataRegioComponent', () => {
  let component: DataRegioComponent;
  let fixture: ComponentFixture<DataRegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
