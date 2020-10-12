import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitblComponent } from './apitbl.component';

describe('ApitblComponent', () => {
  let component: ApitblComponent;
  let fixture: ComponentFixture<ApitblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApitblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
