import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLearningMaterialsComponent } from './app-learning-materials.component';

describe('AppLearningMaterialsComponent', () => {
  let component: AppLearningMaterialsComponent;
  let fixture: ComponentFixture<AppLearningMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLearningMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLearningMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
