import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPackagesComponent } from './daily-packages.component';

describe('DailyPackagesComponent', () => {
  let component: DailyPackagesComponent;
  let fixture: ComponentFixture<DailyPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
