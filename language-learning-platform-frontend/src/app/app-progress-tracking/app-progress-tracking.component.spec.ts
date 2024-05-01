import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProgressTrackingComponent } from './app-progress-tracking.component';

describe('AppProgressTrackingComponent', () => {
  let component: AppProgressTrackingComponent;
  let fixture: ComponentFixture<AppProgressTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProgressTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProgressTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
