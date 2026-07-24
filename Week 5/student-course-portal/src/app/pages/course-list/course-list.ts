import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses = [
    { id: 1, title: 'Advanced Python', price: 99.99, enrollDate: new Date('2026-08-01') },
    { id: 2, title: 'Machine Learning Basics', price: 149.50, enrollDate: new Date('2026-08-15') },
    { id: 3, title: 'Cloud Data Engineering', price: 199.00, enrollDate: new Date('2026-09-10') }
  ];
}