import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  challengeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private challengeService: LanguageService) {
    this.challengeForm = this.formBuilder.group({
      languageId: ['b493c87b-c592-4980-91dd-5e79306af0a3', Validators.required],
      challengeName: ['', Validators.required],
      difficultyLevel: ['beginner'],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.challengeForm.valid) {
      this.challengeService.createChallenge(this.challengeForm.value).subscribe(
        response => {
          console.log('Challenge created:', response);
          alert("Challenge created");
          // Handle success, redirect, or display a success message
        },
        error => {
          console.error('Error creating challenge:', error);
          // Handle error, display an error message
        }
      );
    }
  }

}
