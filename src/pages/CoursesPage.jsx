import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { CourseCard } from '../components/CourseCard';

export default function CoursesPage() {
  return (
    <section className="page-top">
      <div className="section-header">
        <span className="eyebrow">Courses</span>
        <h1>Choose the learning track that fits your goals.</h1>
      </div>

      <div className="course-grid">
        {COURSES.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      <div className="cta-row centered-row">
        <Link to="/contact" className="secondary-btn">Need help choosing?</Link>
      </div>
    </section>
  );
}
