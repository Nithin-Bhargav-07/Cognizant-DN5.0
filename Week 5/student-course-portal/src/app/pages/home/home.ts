// 1. Import OnInit and OnDestroy from core
import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { StudentProfile } from '../student-profile/student-profile';

@Component({
  selector: 'app-home',
  standalone: true,
 imports: [FormsModule, StudentProfile],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit, OnDestroy { 
  
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit() {
    console.log('Home Component Initialized: Fetching initial data...');
  }

  ngOnDestroy() {
    console.log('Home Component Destroyed: Cleaning up...');
  }
}