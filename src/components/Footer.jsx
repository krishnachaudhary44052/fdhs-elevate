import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Logo footer />
        <p>Your skills. Your next step.</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/#top">Home</a>
          <a href="/destinations/">Destinations</a>
          <a href="/courses/">Courses</a>
          <a href="/for-hospitals/">For Hospitals</a>
          <a href="/career-desk/">Career Desk</a>
          <a href="/contact/">Contact</a>
        </nav>
        <div className="footer-meta">
          <a href="mailto:admin@fdhs.in">admin@fdhs.in</a>
          <small>Design concept · Illustrative imagery</small>
        </div>
      </div>
    </footer>
  );
}
