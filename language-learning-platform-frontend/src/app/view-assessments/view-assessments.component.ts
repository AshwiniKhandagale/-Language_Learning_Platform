import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-view-assessments',
  templateUrl: './view-assessments.component.html',
  styleUrls: ['./view-assessments.component.css']
})
export class ViewAssessmentsComponent {

  assessments: any[] = [];

  constructor(private apiService: LanguageService) { }

  ngOnInit() {
    this.getAssessments();
  }

  getAssessments() {
    this.apiService.getAssessments().subscribe(response => {
      console.log('Assessments retrieved:', response);
      this.assessments = response.results;
    }, error => {
      console.error('Error retrieving assessments:', error);
    });
  }

}
