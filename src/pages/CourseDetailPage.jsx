import { Link, useParams } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { PaymentGateway } from '../components/PaymentGateway';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = COURSES.find((entry) => entry.slug === slug);

  if (!course) {
    return (
      <section className="page-top">
        <h1>Course not found</h1>
        <Link to="/courses" className="primary-btn">Back to courses</Link>
      </section>
    );
  }

  return (
    <section className="page-top">
      <div className="section-header">
        <span className="eyebrow">Course details</span>
        <h1>{course.title}</h1>
      </div>

      <div className="course-detail-grid">
        <div className="card-surface">
          <p className="price-tag large">{course.priceLabel}</p>
          <p>{course.description}</p>
          <ul>
            {course.modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
          <div className="meta-row">
            <span>{course.level}</span>
            <span>{course.duration}</span>
          </div>
        </div>

        <PaymentGateway course={course} amount={course.price} courseName={course.title} />
      </div>
    </section>
  );
}
