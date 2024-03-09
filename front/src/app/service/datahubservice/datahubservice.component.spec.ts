import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatahubService} from './datahubservice.component';

describe('DatahubserviceComponent', () => {
  let component: DatahubService;
  let fixture: ComponentFixture<DatahubService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatahubService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatahubService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
