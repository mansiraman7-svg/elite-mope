export function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="pill-row">
        <span className="pill">{course.level}</span>
        <span className="pill muted">{course.duration}</span>
      </div>
      <h3>{course.title}</h3>
      <p className="price-tag">{course.priceLabel}</p>
      <p>{course.description}</p>
      <ul>
        {course.modules.map((module) => (
          <li key={module}>{module}</li>
        ))}
      </ul>
      <a href={`/courses/${course.slug}`} className="primary-btn">Explore course</a>
    </article>
  );
}
