import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html',
  styleUrls: ['./create-assessment.component.css']
})
export class CreateAssessmentComponent  {

  languageId: any="b493c87b-c592-4980-91dd-5e79306af0a3";
  count: any;
  durationAllowed: any;
  difficultyLevel: any;

  constructor(private http: HttpClient, private languageService: LanguageService) {}

  onSubmit() {
    this.languageService.createAssessment(this.languageId, this.count, this.durationAllowed, this.difficultyLevel)
      .subscribe(
        (data) => {
          console.log('Assessment created successfully:', data);
          alert("Assessment created successfully")
          // Handle the response data as needed
        },
        (error) => {
          console.error('Error creating assessment:', error);
          // Handle errors
        }
      );
  }

}
