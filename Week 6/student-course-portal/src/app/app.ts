import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'; // Or HeaderComponent depending on the exact class name

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header], // Add your Header here!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-course-portal';
}