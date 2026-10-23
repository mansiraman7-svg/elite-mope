import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, firebaseReady } from '../firebase';

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  const handleAuth = async (event) => {
    event.preventDefault();

    if (!auth || !firebaseReady) {
      setError('Add Firebase values in .env to enable sign-in and account creation.');
      return;
    }

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setStatus('Working on your account...');

    try {
      let result;

      if (mode === 'signup') {
        result = await createUserWithEmailAndPassword(auth, email, password);

        if (db) {
          await setDoc(doc(db, 'users', result.user.uid), {
            email: result.user.email,
            role: 'student',
            createdAt: new Date().toISOString(),
          });
        }

        setStatus('Account created successfully. Redirecting to your dashboard...');
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
        setStatus('Signed in successfully. Redirecting...');
      }

      if (result?.user) {
        navigate('/student-dashboard');
      }
    } catch (loginError) {
      setError(loginError.message || 'Authentication failed.');
      setStatus('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    setUser(null);
    setStatus('Signed out successfully.');
  };

  return (
    <section className="page-top auth-shell">
      <div className="auth-card card-surface">
        <div className="auth-header">
          <span className="eyebrow">Access your account</span>
          <h1>{user ? 'Welcome back' : mode === 'login' ? 'Log in' : 'Create account'}</h1>
        </div>

        {!firebaseReady ? (
          <div className="message-box warning">
            Firebase is not configured yet. Copy <strong>.env.example</strong> to <strong>.env</strong> and add your project values before enabling student sign-in.
          </div>
        ) : user ? (
          <div className="auth-loggedin">
            <p>
              You are signed in as <strong>{user.email}</strong>.
            </p>
            <div className="auth-actions">
              <Link to="/student-dashboard" className="primary-btn">Open dashboard</Link>
              <button type="button" className="secondary-btn" onClick={handleLogout}>
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleAuth} className="auth-form">
            <div className="auth-toggle" role="tablist" aria-label="Authentication mode">
              <button
                type="button"
                className={mode === 'login' ? 'auth-mode active' : 'auth-mode'}
                onClick={() => setMode('login')}
              >
                Log in
              </button>
              <button
                type="button"
                className={mode === 'signup' ? 'auth-mode active' : 'auth-mode'}
                onClick={() => setMode('signup')}
              >
                Sign up
              </button>
            </div>

            <label>
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            {error ? <div className="message-box error">{error}</div> : null}
            {status ? <div className="message-box info">{status}</div> : null}

            <button type="submit" className="primary-btn full" disabled={isSubmitting}>
              {isSubmitting ? 'Please wait...' : mode === 'login' ? 'Log in' : 'Create account'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
