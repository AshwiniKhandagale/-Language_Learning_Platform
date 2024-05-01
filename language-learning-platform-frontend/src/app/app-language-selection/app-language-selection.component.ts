import { Component, OnInit } from '@angular/core';
import { Language } from './language.model';
import { LanguageService } from '../language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-app-language-selection',
  templateUrl: './app-language-selection.component.html',
  styleUrls: ['./app-language-selection.component.css']
})
export class AppLanguageSelectionComponent implements OnInit {
  languages: Language[] = [];
  filteredLanguages: Language[] = [];
  searchQuery: string = '';
  selectedLanguages: Language[] = [];
  languageForm!: FormGroup ;

  constructor(private languageService: LanguageService,private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.languageService.getLanguages()
      .subscribe(languages => {
        this.languages = languages;
        
      });
      this.languageService.getselectedLanguages()
      .subscribe(languages => {
        this.selectedLanguages = languages;
        
      });
      this.languageForm = this.formBuilder.group({
        language: ['', Validators.required],
        level: ['', Validators.required]
      });
      
  }
  onSubmit(){
  
    if (this.languageForm.valid) {
      const formData = this.languageForm.value;
      this.languageService.addLanguageInWishList(formData).subscribe(response => {
        console.log('POST request successful:', response);
        // Assuming the response is an array of languages
        this.selectedLanguages = response;
        // Handle response as needed
    }, error => {
        console.error('Error occurred:', error);
        // Handle error as needed
    });
    }
  }


 

}
