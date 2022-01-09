import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkStepperComponent } from './cdk-stepper.component';

describe('CdkStepperComponent', () => {
  let component: CdkStepperComponent;
  let fixture: ComponentFixture<CdkStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
