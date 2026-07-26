import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Course {
  private enrolledCount = new BehaviorSubject<number>(0);
  enrolledCount$ = this.enrolledCount.asObservable();

  constructor(private http: HttpClient) {}

  enrollInCourse() {
    const currentVal = this.enrolledCount.value;
    this.enrolledCount.next(currentVal + 1);
  }

  testApiCall() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      console.log('API Response received in Service:', data);
    });
  }

  getCourses() {
    return [
      { id: 1, title: 'Advanced Python', price: 99.99, enrollDate: new Date('2026-08-01') },
      { id: 2, title: 'Machine Learning Basics', price: 149.50, enrollDate: new Date('2026-08-15') },
      { id: 3, title: 'Cloud Data Engineering', price: 199.00, enrollDate: new Date('2026-09-10') }
    ];
  }
}