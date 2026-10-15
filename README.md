# FDHS Elevate — React + Vite

This project keeps the existing FDHS Elevate homepage, courses, Career Desk, contact enquiry, nurse/hospital registration, college registration and shared sign-in page. It adds the new destinations overview, Germany nursing pathway, Germany nursing career guide, and hospital workforce partnerships pages.

## Run locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Routes

- `/` — Home
- `/destinations/` — Destinations overview
- `/destinations/germany/` — Germany nursing pathway
- `/career-desk/` — Career Desk landing page
- `/career-desk/germany/` — Germany nursing career guide
- `/courses/` — Courses
- `/for-hospitals/` — Hospital workforce partnerships
- `/contact/` — Contact enquiry
- `/register/` — Nurse registration
- `/register/hospital/` — Hospital registration
- `/register/college/` — College registration
- `/signin/` — Shared sign-in for nurse, hospital and college accounts

## Notes

- Routing follows the existing lightweight pathname-based approach; React Router was not added.
- The sign-in and enquiry forms are front-end demonstrations. Connect them to your authentication/API and form submission backend before production use.
- Some destination photography is loaded from Unsplash, consistent with the existing homepage. The site needs an internet connection to load those remote images and Google Fonts.
