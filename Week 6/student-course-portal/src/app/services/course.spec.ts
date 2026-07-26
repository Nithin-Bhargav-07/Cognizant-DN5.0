import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Course } from './course';

describe('Course', () => {
  let service: Course;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(Course);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 3 courses initially', () => {
    const courses = service.getCourses();
    expect(courses.length).toBe(3);
  });

  it('should increment the enrolled count', () => {
    service.enrollInCourse();
    service.enrolledCount$.subscribe(count => {
      expect(count).toBe(1);
    });
  });
});