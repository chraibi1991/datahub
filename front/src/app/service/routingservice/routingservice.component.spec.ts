import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingserviceComponent } from './routingservice.component';

describe('RoutingserviceComponent', () => {
  let component: RoutingserviceComponent;
  let fixture: ComponentFixture<RoutingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
