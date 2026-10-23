# Elite Mope by MD architecture

This project is designed as a configurable, mobile-first web app with a strong Android PWA presentation and Firebase-backed features.

## 1. Product goals

- Present Elite Mope by MD as a premium educational brand
- Offer a three-tier course catalog: ₹99, ₹999, ₹1499
- Provide a polished landing page and informational pages
- Support Firebase sign-in and Firestore-backed student records
- Support admin dashboards and secure role-based access patterns
- Offer Razorpay-style test checkout that is disabled unless proper keys are supplied
- Be installable as an Android app via PWA manifest and service worker

## 2. High-level architecture

### Frontend

- React + Vite for SPA experience
- Responsive CSS with mobile-first layout
- Product pages and dashboards inside a single app shell
- Route-based pages for home, about, contact, courses, student dashboard, admin dashboard

### Authentication and data

- Firebase Authentication for sign-in options
- Firestore for user profiles, course enrollments, progress and admin data
- Permissions enforced in Firestore security rules and UI gating

### Payments

- Client-side secure test checkout using Razorpay test keys when configured
- Real order creation and validation should be done via serverless function or secure backend in production
- No payment success is simulated without a valid test checkout call or server validation

### Hosting

- Firebase Hosting for free-tier-friendly deployment
- Static build output served from `dist`
- Optional custom domain with Firebase Hosting

## 3. Folder structure

```text
elite-mope/
├─ docs/
│  └─ ARCHITECTURE.md
├─ public/
│  ├─ manifest.webmanifest
│  ├─ service-worker.js
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ CourseCard.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ PaymentGateway.jsx
│  │  └─ SectionHeader.jsx
│  ├─ data/
│  │  └─ courses.js
│  ├─ pages/
│  │  ├─ AboutPage.jsx
│  │  ├─ AdminDashboard.jsx
│  │  ├─ ContactPage.jsx
│  │  ├─ CourseDetailPage.jsx
│  │  ├─ CoursesPage.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ LoginPage.jsx
│  │  └─ StudentDashboard.jsx
│  ├─ App.jsx
│  ├─ firebase.js
│  ├─ main.jsx
│  └─ styles.css
├─ .env.example
├─ .firebaserc
├─ firebase.json
├─ firestore.rules
├─ firestore.indexes.json
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
└─ .gitignore
```

## 4. Technology decisions

### Why React + Vite?

- Easy developer experience
- Excellent for rapid landing page and dashboard iteration
- Produces a lightweight static build optimized for Firebase Hosting

### Why Firebase?

- Free-tier friendly for auth and document storage
- Works well with static frontends and PWA deployment
- Supports security rules and easy admin configuration via custom claims

### Why Razorpay test mode?

- Familiar payment flow for Indian learners
- Allows test UPI and card flows without risking real payments
- Safer than faking confirmations in client code

## 5. Paid services, quotas and configuration

### Free / low-cost services

- Firebase Hosting: free tier for small production usage
- Firebase Authentication: free within generous quotas for typical hobby/prototype load
- Firestore: free tier with limited document reads/writes per month; large-scale usage requires upgrade
- Firebase Storage: free tier available, optional for course materials

### Paid services likely required for production

- Firebase pay-as-you-go beyond free tier limits
- Firebase custom domain and HTTPS if using a custom domain (optional)
- Razorpay production account for real transactions (not needed for test mode)
- Optional Cloud Functions or backend service for secure order creation and payment verification

### Required configuration steps

1. Create a Firebase project and enable Authentication + Firestore
2. Configure web app in Firebase console and paste env keys
3. Add `admin` custom claims for admin account
4. Enable Hosting and deploy `dist`
5. Add Razorpay test key ID only for test mode
6. Optionally enable Cloud Functions for server-side order creation and payment verification

## 6. Security model

- The browser never stores private payment or service credentials
- Firebase client config is public by design, but private keys must never be committed
- Firestore rules restrict read/write access by authenticated user and admin claims
- Payment success is treated as an external system result, not as a client-side hardcoded success condition

## 7. Development workflow

1. Start with app shell and brand system
2. Build marketing pages
3. Add course catalog and detail pages
4. Add Firebase readiness and auth
5. Add dashboards and role access
6. Add payment flow behind environment gating
7. Add PWA support and Android styling
8. Deploy and verify in Firebase Hosting

## 8. Recommended production safeguards

- Use Cloud Functions for payment order generation and validation
- Keep Firestore rules strict
- Use admin custom claims for admin-only endpoints and dashboards
- Log all enrollments and payment events in Firestore or backend logs
- Keep test mode disabled in production by default
