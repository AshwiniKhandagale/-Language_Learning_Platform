import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChallengesGamesComponent } from './app-challenges-games.component';

describe('AppChallengesGamesComponent', () => {
  let component: AppChallengesGamesComponent;
  let fixture: ComponentFixture<AppChallengesGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChallengesGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChallengesGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
