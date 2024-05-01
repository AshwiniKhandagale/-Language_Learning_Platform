import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanguageSelectionComponent } from './app-language-selection.component';

describe('AppLanguageSelectionComponent', () => {
  let component: AppLanguageSelectionComponent;
  let fixture: ComponentFixture<AppLanguageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLanguageSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLanguageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
