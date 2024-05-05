import { Component, OnInit } from '@angular/core';
import { LanguageChallenges } from '../language.challenges';

@Component({
  selector: 'app-app-challenges-games',
  templateUrl: './app-challenges-games.component.html',
  styleUrls: ['./app-challenges-games.component.css']
})
export class AppChallengesGamesComponent implements OnInit {

  challenges: string[] = [];
  games: string[] = [];
  
  constructor(private languageChallenges: LanguageChallenges) {}

  ngOnInit(): void {
    this.languageChallenges.getChallenges().subscribe(challenges => {
      this.challenges = challenges;
    });

    this.languageChallenges.getGames().subscribe(games => {
      this.games = games;
    });
    
  }

}
