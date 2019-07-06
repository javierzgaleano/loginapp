import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoPAgeComponent } from './privado-page.component';

describe('PrivadoPAgeComponent', () => {
  let component: PrivadoPAgeComponent;
  let fixture: ComponentFixture<PrivadoPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivadoPAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
