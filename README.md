# Elite Mope by MD

A mobile-first business and learning website for Elite Mope by MD with a cream-and-burgundy luxury identity, Firebase-ready auth and data layer, installable Android PWA, and secure test-mode payment flow.

## Live app concept

- Brand: Elite Mope by MD
- Audience: students, professionals, founders, and team learners
- Core actions: Explore courses, enroll, sign in, view dashboard, access admin insights
- Stack: React + Vite + Firebase + PWA + optional Razorpay test checkout

## Architecture summary

See `docs/ARCHITECTURE.md` for the project blueprint. This app is designed for:

- fast mobile-first browsing
- Firebase auth and Firestore readiness
- installable Android PWA behavior
- secure environment-based secrets
- no hardcoded credentials
- free-tier hosting options and test-mode payments only

## Quick start

1. Copy `.env.example` to `.env`
2. Fill in your Firebase configuration and Razorpay test key
3. Install dependencies:
   npm install
4. Run locally:
   npm run dev
5. Build for production:
   npm run build

## Deployment

- Firebase Hosting: `firebase deploy --only hosting`
- Firestore rules: `firebase deploy --only firestore:rules`

## Required configuration

- Firebase project with Authentication enabled and Firestore database created
- Firebase Hosting enabled
- Optional Razorpay test key for checkout
- Admin claims configured in Firebase Authentication custom claims for admin access

## Security notes

- Never commit `.env` or any real secret values
- Do not expose Firebase private keys or service account credentials in the browser
- Payment order creation must happen in a secure backend or serverless function in production
- The app uses test-mode checkout by default and requires valid environment keys to activate real payment flows

## Folder structure

```text
.
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
