import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: any[] = [];

  constructor(private courseService: Course) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.courseService.testApiCall();
  }

  enroll(courseTitle: string) {
    this.courseService.enrollInCourse();
    alert('Successfully enrolled in ' + courseTitle);
  }
}