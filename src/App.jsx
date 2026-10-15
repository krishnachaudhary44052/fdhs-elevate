import React from 'react';
import HomePage from './homepage/HomePage.jsx';
import CareerDesk from './career-desk/CareerDesk.jsx';
import GermanyCareerGuide from './career-desk/GermanyCareerGuide.jsx';
import Courses from './courses/Courses.jsx';
import ContactEnquiry from './contact/ContactEnquiry.jsx';
import RegistrationPage from './registration/RegistrationPage.jsx';
import CollegeRegistration from './registration/CollegeRegistration.jsx';
import SignInPage from './auth/SignInPage.jsx';
import DestinationsPage from './destinations/DestinationsPage.jsx';
import GermanyPathway from './destinations/GermanyPathway.jsx';
import HospitalPartnerships from './hospitals/HospitalPartnerships.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/career-desk/germany' || path === '/career-desk/germany/nursing') return <GermanyCareerGuide />;
  if (path === '/career-desk') return <CareerDesk />;
  if (path === '/destinations/germany') return <GermanyPathway />;
  if (path === '/destinations') return <DestinationsPage />;
  if (path === '/for-hospitals' || path === '/hospitals') return <HospitalPartnerships />;
  if (path === '/courses') return <Courses />;
  if (path === '/contact') return <ContactEnquiry />;
  if (path === '/signin' || path === '/signin/nurse' || path === '/signin/hospital' || path === '/signin/college') return <SignInPage />;
  if (path === '/register/college') return <CollegeRegistration />;
  if (path === '/register' || path === '/register/hospital') return <RegistrationPage />;
  return <HomePage />;
}
