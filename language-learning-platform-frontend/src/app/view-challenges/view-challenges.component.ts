import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-view-challenges',
  templateUrl: './view-challenges.component.html',
  styleUrls: ['./view-challenges.component.css']
})
export class ViewChallengesComponent implements OnInit {

  challenges: any;
  assessmentQuestions: any;
  showAssessmentQuestions:any;
  assessmentId:any;
  leaderboard: any[] = [];
  constructor(private challengeService: LanguageService) { }

  ngOnInit(): void {
    this.getChallenges();
  }

  getChallenges(): void {
    this.challengeService.getChallenges()
      .subscribe(
        (data) => {
          this.challenges = data.challenges;
          console.log("data",data)
        },
        (error) => {
          console.error('Error fetching challenges:', error);
        }
      );
  }
  displayAssessmentQuestions(assessmentQuestions: any[]): void {
    // Assuming there's a variable to store the assessment questions
    this.assessmentQuestions = assessmentQuestions;
    // You can set a flag to show the assessment questions UI
    this.showAssessmentQuestions = true;
  }
  signUpForChallenge(challenge: any): void {
    // Implement your sign up logic here
    this.challengeService.signUpForChallenge(challenge.challenge_id, challenge.language_id, 5, 30, challenge.difficulty_level)
    .subscribe(
      (data) => {
        console.log('Successfully signed up for challenge:', data);
        // Optionally, you can perform any additional logic here
        if (data && data.assesmentQuestions) {
          // Assuming there's a method to handle assessment questions display
          this.assessmentId = data.assessmentId;
          this.displayAssessmentQuestions(data.assesmentQuestions);
        }
      },
      (error) => {
        alert(error.error.message);
        console.error('Error signing up for challenge:', error);
      }
    );
    console.log('Signing up for challenge:', challenge);
  }
  submitAssessment(question:any): void {
    const answers ={
      contentId: question.content_id,
      userAnswer: question.userAnswer
    };
    this.challengeService.updateAssessmentProgress(this.assessmentId,answers)
      .subscribe(
        (data) => {
          console.log('Successfully submitted assessment:', data);
          alert(data.message);
        },
        (error) => {
          console.error('Error submitting assessment:', error);
        }
      );
  }
  
  viewLeaderboard(challengeId: string): void {
    // Implement your view leaderboard logic here
    this.challengeService.getLeaderboard(challengeId).subscribe(
      (data) => {
        this.leaderboard = data.leaderboard;
        
      },
      (error) => {
        console.error('Error retrieving leaderboard:', error);
        // Handle errors
      }
    );
  }
 

}
