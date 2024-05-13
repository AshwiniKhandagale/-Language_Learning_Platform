import { Component, OnInit } from '@angular/core';
import { Language } from './language.model';
import { LanguageService } from '../language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-app-language-selection',
  templateUrl: './app-language-selection.component.html',
  styleUrls: ['./app-language-selection.component.css']
})
export class AppLanguageSelectionComponent  implements OnInit {
  foreignLanguage: any;
  baseLanguage: any;
  languages: any;

  constructor(private languageService: LanguageService) { }
  ngOnInit(): void {
    this.getLanguages();
  }

  setupLanguages(): void {
    const data = { foreignLanguage: this.foreignLanguage, baseLanguage: this.baseLanguage };
    this.languageService.setupLanguages(data)
      .subscribe(
        response => {
          console.log('Language setup successful:', response);
         
          // Optionally, you can perform any additional logic here
        },
        error => {
          console.error('Error setting up languages:', error);
        }
      );
  }

  getLanguages(): void {
    this.languageService.getLanguages()
      .subscribe(
        response => {
          console.log('Supported languages:', response);
          this.languages = response.results;
        },
        error => {
          console.error('Error getting supported languages:', error);
        }
      );
  }
 

}
