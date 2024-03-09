import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioService } from './regioservice.component';

describe('RegioserviceComponent', () => {
  let component: RegioService;
  let fixture: ComponentFixture<RegioService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegioService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegioService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
