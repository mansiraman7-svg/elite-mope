import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import CoursesPage from './CoursesPage';
import CourseDetailPage from './CourseDetailPage';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="content-shell">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

function Routes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:slug" element={<CourseDetailPage />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<HomePage />} />
    </>
  );
}

export default App;
