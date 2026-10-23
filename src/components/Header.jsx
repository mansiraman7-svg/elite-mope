import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Courses', to: '/courses' },
    { label: 'Contact', to: '/contact' },
    { label: 'Login', to: '/login' },
    { label: 'Student Dashboard', to: '/student-dashboard' },
    { label: 'Admin', to: '/admin' },
  ];

  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">EM</div>
        <div>
          <Link to="/" className="brand-name">Elite Mope by MD</Link>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? 'nav-link active' : 'nav-link'}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
