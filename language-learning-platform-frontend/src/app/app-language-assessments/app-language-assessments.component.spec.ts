import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanguageAssessmentsComponent } from './app-language-assessments.component';

describe('AppLanguageAssessmentsComponent', () => {
  let component: AppLanguageAssessmentsComponent;
  let fixture: ComponentFixture<AppLanguageAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLanguageAssessmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLanguageAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
