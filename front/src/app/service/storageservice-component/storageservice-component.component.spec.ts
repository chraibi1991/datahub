import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storageservice } from './storageservice-component.component';

describe('StorageserviceComponentComponent', () => {
  let component: Storageservice;
  let fixture: ComponentFixture<Storageservice>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Storageservice]
    });
    fixture = TestBed.createComponent(Storageservice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
