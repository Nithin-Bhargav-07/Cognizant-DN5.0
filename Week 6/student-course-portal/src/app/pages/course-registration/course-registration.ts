import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // 1. Import Reactive Form modules
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './course-registration.html',
  styleUrl: './course-registration.css'
})
export class CourseRegistration {
  registrationForm: FormGroup;

  // 3. Inject FormBuilder into the constructor
  constructor(private fb: FormBuilder) {
    // 4. Define the form structure and strict validators
    this.registrationForm = this.fb.group({
      courseName: ['', Validators.required],
      level: ['beginner', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue] 
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Registration Data:', this.registrationForm.value);
      alert('Successfully registered for ' + this.registrationForm.value.courseName);
      this.registrationForm.reset({ level: 'beginner' });
    }
  }
}