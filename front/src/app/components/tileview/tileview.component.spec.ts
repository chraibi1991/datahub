import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileviewComponent } from './tileview.component';

describe('TileviewComponent', () => {
  let component: TileviewComponent;
  let fixture: ComponentFixture<TileviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
