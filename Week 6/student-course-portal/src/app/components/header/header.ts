import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../services/course';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  enrolledCount = 0;

  constructor(private courseService: Course) {}

  ngOnInit() {
    this.courseService.enrolledCount$.subscribe(count => {
      this.enrolledCount = count;
    });
  }
}