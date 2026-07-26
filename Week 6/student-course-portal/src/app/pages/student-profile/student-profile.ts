import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {
  userProfile = {
    name: 'Alex Student',
    email: '',
    major: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted Successfully!', this.userProfile);
      alert('Profile Updated!');
    }
  }
}