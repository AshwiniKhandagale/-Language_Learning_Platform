import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { LanguageService } from '../language.service';



@Component({
  selector: 'app-app-learning-materials',
  templateUrl: './app-learning-materials.component.html',
  styleUrls: ['./app-learning-materials.component.css']
})
export class AppLearningMaterialsComponent implements OnInit {
  materialsForm!: FormGroup;
  learningMaterials: any;
  selectedContentType:any;
  userType:any
  constructor(private fb: FormBuilder, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType');
    this.materialsForm = this.fb.group({
      language_id: ['b493c87b-c592-4980-91dd-5e79306af0a3', Validators.required],
      content_type: ['text', Validators.required],
      content: this.fb.array([])
    });
    this.selectedContentType = "text";
    this.getMaterialsByContentType();
    this.addMaterial(); // Start with one material
    // this.materialsForm.get('content_type')?.valueChanges.subscribe(contentType => {
    //   this.selectedContentType = contentType;
    //   this.getMaterialsByContentType();
    // });
  }

  getContentControls() {
    return (this.materialsForm.get('content') as FormArray).controls;
  }

  addMaterial() {
    const materialForm = this.fb.group({
      base_word: ['', Validators.required],
      foreign_word: ['', Validators.required],
      creator_id: ['29ebc24c-6286-40ab-aec6-2107c6e445e2', Validators.required],
      difficulty_level: ['beginner', Validators.required],
      weightage: [1, [Validators.required, Validators.min(1)]]
    });
    (this.materialsForm.get('content') as FormArray).push(materialForm);
  }

  removeMaterial(index: number) {
    (this.materialsForm.get('content') as FormArray).removeAt(index);
  }

  submitMaterials() {
    if (this.materialsForm.valid) {
      const payload = {
        language_id: this.materialsForm.value.language_id,
        content_type: this.materialsForm.value.content_type,
        content: this.materialsForm.value.content.map((material: any) => {
          return {
            base_word: material.base_word,
            foreign_word: material.foreign_word,
            creator_id: material.creator_id,
            difficulty_level: material.difficulty_level,
            weightage: material.weightage
          };
        })
      };

      this.languageService.postLearningMaterials(payload).subscribe({
        next: (response) => {
          console.log('Materials added:', response);
          // Reset form after successful submission
          
        },
        error: (error) => {
          console.error('Error adding materials:', error);
          // Handle error here (e.g., display error message to user)
        }
      });
    } else {
      console.error('Form is not valid!');
      // Log detailed error messages for each field
      Object.keys(this.materialsForm.controls).forEach(field => {
        const control = this.materialsForm.get(field);
        if (control instanceof FormGroup) {
          Object.keys(control.controls).forEach(innerField => {
            const innerControl = control.get(innerField);
            if (innerControl && !innerControl.valid) {
              console.error(`Field ${field}.${innerField} is invalid.`);
            }
          });
        } else if (control && !control.valid) {
          console.error(`Field ${field} is invalid.`);
        }
      });
    }
  }
  
   getMaterialsByContentType() {
    if ( this.selectedContentType) {
    
      this.languageService.getLearningMaterials(
        this.selectedContentType,
        1, // page number
        10, // page size
        'created_at', // sorting by base_word
        'ASC' // sorting order
      ).subscribe(
      (response) => {
        console.log('Learning materials:', response);
        this.learningMaterials = response.data;
        // Handle the response data here as needed
      },
      (error) => {
        console.error('Error fetching learning materials:', error);
        // Handle errors here
      }
    );
  }
  }
}
