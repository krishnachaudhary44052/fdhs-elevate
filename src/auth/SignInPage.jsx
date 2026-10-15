import React, { useState } from 'react';
import { UserRound, Building2, GraduationCap, Eye, EyeOff, ArrowUpRight, ArrowRight, Headset } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './signin.css';

const accountTypes = [
  { id: 'nurse', label: 'Nurse', Icon: UserRound },
  { id: 'hospital', label: 'Hospital', Icon: Building2 },
  { id: 'college', label: 'College', Icon: GraduationCap },
];

const welcomeCopy = {
  nurse: <>Welcome back.<br /><span>Your next step is waiting.</span></>,
  hospital: <>Welcome back.<br /><span>Build your healthcare team.</span></>,
  college: <>Welcome back.<br /><span>Prepare your students for what’s next.</span></>,
};

export default function SignInPage() {
  const [accountType, setAccountType] = useState('nurse');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const registerPath = accountType === 'college' ? '/register/college/' : accountType === 'hospital' ? '/register/hospital/' : '/register/';

  function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');
    if (!identifier.trim() || !password) {
      setError('Please enter your email or mobile number and password.');
      return;
    }
    // UI-only until an authentication API is connected.
    setMessage(`Your ${accountType} sign-in form is ready. Connect your authentication API to sign in securely.`);
  }

  function handleForgotPassword() {
    setMessage('Password reset needs to be connected to your authentication service. Please contact admin@fdhs.in for assistance.');
    setError('');
  }

  return (
    <div className="signin-page">
      <Header />
      <main className="signin-main">
        <section className="signin-card" aria-label="Sign in to FDHS Elevate">
          <div className={`signin-visual signin-visual-${accountType}`}>
            <img src="/images/hospital-registration-hero.png" alt="Healthcare professionals in a modern hospital" />
            <div className="signin-visual-shade" />
            <div className="signin-visual-copy">
              <p className="signin-eyebrow">FDHS ELEVATE · HEALTHCARE CAREERS</p>
              <h2>{welcomeCopy[accountType]}</h2>
            </div>
          </div>

          <div className="signin-panel">
            <div className="signin-heading">
              <h1>Sign in to FDHS Elevate.</h1>
              <p>Choose your account type.</p>
            </div>

            <div className="signin-account-types" role="tablist" aria-label="Account type">
              {accountTypes.map(({ id, label, Icon }) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={accountType === id}
                  className={`signin-type ${accountType === id ? 'selected' : ''}`}
                  key={id}
                  onClick={() => { setAccountType(id); setError(''); setMessage(''); }}
                >
                  <Icon size={29} strokeWidth={1.8} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <form className="signin-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="signin-identifier">Email or mobile number</label>
              <input
                id="signin-identifier"
                type="text"
                autoComplete="username"
                placeholder="Enter your email or mobile number"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
              />

              <label htmlFor="signin-password">Password</label>
              <div className="signin-password-wrap">
                <input
                  id="signin-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button type="button" className="signin-eye" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((value) => !value)}>
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>

              <div className="signin-forgot-row">
                <button type="button" onClick={handleForgotPassword}>Forgot password?</button>
              </div>

              {error && <p className="signin-feedback signin-error" role="alert">{error}</p>}
              {message && <p className="signin-feedback signin-message" role="status">{message}</p>}

              <button className="signin-submit" type="submit">Sign in <ArrowUpRight size={22} /></button>
            </form>

            <div className="signin-or"><span />OR<span /></div>
            <a className="signin-create" href={registerPath}>
              <span>New to Elevate?</span> <strong>Create an account</strong> <ArrowRight size={21} />
            </a>
            <p className="signin-note">Access your profile, applications and enquiries.</p>
          </div>
        </section>

        <div className="signin-help"><Headset size={23} /><span>Need help?</span><a href="mailto:admin@fdhs.in">admin@fdhs.in</a></div>
      </main>
      <Footer />
    </div>
  );
}
