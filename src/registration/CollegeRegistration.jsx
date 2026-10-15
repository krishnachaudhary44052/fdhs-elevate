import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  GraduationCap,
  Hospital,
  UserRound,
  CheckCircle2,
} from 'lucide-react';
import './CollegeRegistration.css';

/**
 * College registration page for FDHS Elevate.
 *
 * Image:
 * Put the college / clinical-training photo at:
 * public/images/college-registration-hero.png
 *
 * Routes used below (/register/nurse, /register, /register/college, /signin)
 * can be changed to match your app's router.
 */
const accountOptions = [
  { label: 'Nurse', href: '/register/nurse', Icon: UserRound },
  { label: 'Hospital', href: '/register', Icon: Hospital },
  { label: 'College', href: '/register/college', Icon: GraduationCap },
];

const initialForm = {
  fullName: '',
  designation: '',
  institution: '',
  city: '',
  email: '',
  phone: '',
  partnershipInterest: '',
  password: '',
  agree: false,
};

function CollegeHeader() {
  return (
    <header className="college-header">
      <div className="college-header-inner">
        <a className="college-brand" href="/" aria-label="FDHS Elevate home">
          <span className="college-brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>FDHS <strong>elevate</strong></span>
        </a>

        <nav className="college-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#destinations">Destinations</a>
          <a href="/courses/">Courses</a>
          <a href="/#hospitals">For Hospitals</a>
          <a href="/career-desk/">Career Desk</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="college-header-actions">
          <a className="college-signin" href="/signin/">
            <UserRound size={22} strokeWidth={1.9} />
            <span>Sign in</span>
          </a>
          <a className="college-register-link" href="/register/">
            Register <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </header>
  );
}

function CollegeFooter() {
  return (
    <footer className="college-footer">
      <a className="college-brand college-footer-brand" href="/" aria-label="FDHS Elevate home">
        <span className="college-brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>FDHS <strong>elevate</strong></span>
      </a>
      <span className="college-footer-tagline">Your skills. Your next step.</span>
      <nav className="college-footer-nav" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/#destinations">Destinations</a>
        <a href="/courses/">Courses</a>
        <a href="/#hospitals">For Hospitals</a>
        <a href="/career-desk/">Career Desk</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div className="college-footer-contact">
        <a href="mailto:admin@fdhs.in">admin@fdhs.in</a>
        <small>Design concept · Illustrative imagery</small>
      </div>
    </footer>
  );
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', autoComplete }) {
  return (
    <label className="college-field">
      <span className="college-field-label">{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
      />
    </label>
  );
}

function ProgressSteps({ activeStep }) {
  const steps = ['Account', 'Verify', 'Profile'];

  return (
    <div className="college-steps" aria-label={`Step ${activeStep} of 3`}>
      {steps.map((step, index) => {
        const number = index + 1;
        return (
          <React.Fragment key={step}>
            {index > 0 && <span className="college-step-line" />}
            <div className={`college-step ${activeStep === number ? 'is-current' : ''} ${activeStep > number ? 'is-complete' : ''}`}>
              <span className="college-step-number">
                {activeStep > number ? <CheckCircle2 size={17} /> : number}
              </span>
              <span>{step}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function CollegeForm() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [notice, setNotice] = useState('');

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setNotice('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (activeStep === 1 && !form.agree) {
      setNotice('Please accept the Terms of Service and Privacy Policy to continue.');
      return;
    }

    if (activeStep === 1) {
      setActiveStep(2);
      setNotice('Your details are ready for verification. Connect your backend/OTP service to verify this account.');
      return;
    }

    if (activeStep === 2) {
      setActiveStep(3);
      setNotice('Contact verification is a frontend demo. Connect an OTP provider to verify the code.');
      return;
    }

    setNotice('Your college profile is ready for submission. Connect your backend to finish registration.');
  };

  return (
    <section className="college-form-panel">
      <div className="college-form-content">
        <h1>Create your account.</h1>
        <p className="college-subtitle">Choose how you’ll use Elevate.</p>

        <div className="college-account-options" role="tablist" aria-label="Choose account type">
          {accountOptions.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              role="tab"
              aria-selected={label === 'College'}
              className={`college-account-option ${label === 'College' ? 'is-selected' : ''}`}
            >
              <Icon size={39} strokeWidth={1.65} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <ProgressSteps activeStep={activeStep} />

        <h2 className="college-form-title">
          {activeStep === 1 ? 'College registration' : activeStep === 2 ? 'Verify your contact details' : 'Complete your institute profile'}
        </h2>

        <form onSubmit={handleSubmit} noValidate={false}>
          {activeStep === 1 && (
            <div className="college-fields">
              <FormField label="Contact person" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full name" autoComplete="name" />
              <FormField label="Designation" name="designation" value={form.designation} onChange={handleChange} placeholder="e.g. Principal, Dean, Training Head" />
              <FormField label="College / institute name" name="institution" value={form.institution} onChange={handleChange} placeholder="Enter institute name" />
              <FormField label="City" name="city" value={form.city} onChange={handleChange} placeholder="Enter city" autoComplete="address-level2" />
              <FormField label="Official email" name="email" value={form.email} onChange={handleChange} placeholder="name@institute.edu.in" type="email" autoComplete="email" />
              <FormField label="Phone number" name="phone" value={form.phone} onChange={handleChange} placeholder="10 digit mobile number" type="tel" autoComplete="tel" />

              <label className="college-field college-field-full">
                <span className="college-field-label">Partnership interest</span>
                <select name="partnershipInterest" value={form.partnershipInterest} onChange={handleChange} required>
                  <option value="">Training / Career guidance / Placement collaboration</option>
                  <option value="Training partnerships">Training partnerships</option>
                  <option value="Career guidance">Career guidance</option>
                  <option value="Placement collaboration">Placement collaboration</option>
                  <option value="All of the above">All of the above</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="college-field college-field-full">
                <span className="college-field-label">Create password</span>
                <span className="college-password-wrap">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    className="college-password-toggle"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
                  </button>
                </span>
              </label>
            </div>
          )}

          {activeStep === 2 && (
            <div className="college-next-step">
              <p>Review the contact details associated with this college account.</p>
              <div className="college-summary">
                <span>Official email</span><strong>{form.email}</strong>
                <span>Phone number</span><strong>{form.phone}</strong>
              </div>
              <label className="college-field">
                <span className="college-field-label">Verification code</span>
                <input name="verificationCode" inputMode="numeric" maxLength={6} placeholder="Enter 6-digit code" required />
              </label>
            </div>
          )}

          {activeStep === 3 && (
            <div className="college-next-step">
              <p>Thank you. Add any additional information your institution would like us to know.</p>
              <label className="college-field">
                <span className="college-field-label">Additional requirements (optional)</span>
                <textarea rows={4} placeholder="Tell us about your students, programmes or partnership goals…" />
              </label>
            </div>
          )}

          {activeStep === 1 && (
            <label className="college-terms">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
              <span>I agree to the <a href="/terms/">Terms of Service</a> and <a href="/privacy/">Privacy Policy</a>.</span>
            </label>
          )}

          {notice && <p className="college-notice" role="status">{notice}</p>}

          <button className="college-submit" type="submit">
            {activeStep === 1 ? 'Create college account' : activeStep === 2 ? 'Verify and continue' : 'Finish profile'}
            <ArrowUpRight size={21} />
          </button>
        </form>

        <p className="college-form-hint">
          {activeStep === 1
            ? 'Verify your contact details, then complete the institute profile.'
            : activeStep === 2
              ? 'Enter the verification code sent to your contact details.'
              : 'You can update your institute profile later.'}
        </p>

        <div className="college-form-bottom">
          <span>Already registered?</span>
          <a href="/signin/">Sign in <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export default function CollegeRegistration() {
  return (
    <div className="college-registration-page">
      <CollegeHeader />
      <main className="college-registration-main">
        <section className="college-registration-card">
          <aside className="college-hero">
            <img
              src="/images/college-registration-hero.png"
              alt="Healthcare instructor guiding nursing students during clinical training"
            />
            <div className="college-hero-overlay" />
            <div className="college-hero-copy">
              <h2>Prepare your<br />students for<br />what’s next.</h2>
              <p>Campus and training partnerships.</p>
            </div>
          </aside>
          <CollegeForm />
        </section>
      </main>
      <CollegeFooter />
    </div>
  );
}
