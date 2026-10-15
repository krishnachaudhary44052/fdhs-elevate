import React, { useState } from 'react';
import { ArrowUpRight, UserRound, Eye, EyeOff, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo.jsx';
import './registration.css';

const roleDetails = {
  Nurse: { heading: 'Nurse registration', title: 'Build your healthcare career.', subtitle: 'Create your professional account.' },
  Hospital: { heading: 'Hospital registration', title: 'Build your healthcare team.', subtitle: 'Create an organisation account.' },
  College: { heading: 'College registration', title: 'Shape future healthcare talent.', subtitle: 'Create an education partner account.' },
};

export default function RegistrationPage() {
  const [role, setRole] = useState('Hospital');
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', designation: '', organisation: '', city: '', email: '', phone: '', type: '', password: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const changeRole = (next) => { setRole(next); setStep(1); setSubmitted(false); };
  const submit = (e) => {
    e.preventDefault();
    if (!accepted) return;
    if (step === 1) { setStep(2); return; }
    if (step === 2) { setStep(3); return; }
    setSubmitted(true);
  };
  const details = roleDetails[role];
  return <div className="registration-page" id="top">
    <header className="reg-header"><div className="reg-header-inner"><Logo/><nav className="reg-nav"><a href="/">Home</a><a href="/#destinations">Destinations</a><a href="/courses/">Courses</a><a href="/#employers">For Hospitals</a><a href="/career-desk/">Career Desk</a><a href="/#contact">Contact</a></nav><div className="reg-account"><a className="signin-link" href="/sign-in/"><UserRound size={23}/><span>Sign in</span></a><a className="register-link" href="/register/">Register <ArrowUpRight size={20}/></a></div></div></header>
    <main className="reg-main"><section className="reg-card">
      <aside className="reg-visual" style={{ backgroundImage: "linear-gradient(180deg, transparent 42%, rgba(8,35,73,.25) 58%, #0b2d58 100%), url('/images/hospital-registration.jpg')" }}>
        <div className="visual-copy"><span className="eyebrow">FOR {role === 'Hospital' ? 'HOSPITALS' : role === 'Nurse' ? 'NURSES' : 'COLLEGES'}</span><h1>{details.title}</h1><p>{details.subtitle}</p></div>
      </aside>
      <section className="reg-form-panel"><div className="reg-form-inner">
        <h2>Create your account.</h2><p className="reg-subtitle">Choose how you’ll use Elevate.</p>
        <div className="role-switch" role="tablist" aria-label="Account type">{Object.keys(roleDetails).map((r) => <button type="button" role="tab" aria-selected={role === r} className={role === r ? 'active' : ''} key={r} onClick={() => changeRole(r)}>{r}</button>)}</div>
        <div className="stepper" aria-label={`Step ${step} of 3`}>{['Account', 'Verify', 'Profile'].map((label, i) => <React.Fragment key={label}><div className={`step-item ${step >= i + 1 ? 'step-current' : ''}`}><span className="step-number">{step > i + 1 ? <CheckCircle2 size={18}/> : i + 1}</span><span>{label}</span></div>{i < 2 && <span className={`step-line ${step > i + 1 ? 'done' : ''}`}/>}</React.Fragment>)}</div>
        {submitted ? <div className="reg-success"><CheckCircle2 size={42}/><h3>Thanks for registering!</h3><p>Your {role.toLowerCase()} account details have been captured in this demo. Connect a backend to securely save and verify registrations.</p><button type="button" className="primary-button" onClick={() => { setSubmitted(false); setStep(1); }}>Back to registration</button></div> : <form onSubmit={submit}>
          <h3>{step === 1 ? details.heading : step === 2 ? 'Verify your contact details' : 'Complete your profile'}</h3>
          {step === 1 && <div className="form-grid">
            <label>Contact person<input name="name" value={form.name} onChange={update} placeholder="Full name" required autoComplete="name"/></label>
            <label>Designation<input name="designation" value={form.designation} onChange={update} placeholder="Your designation" required/></label>
            <label>{role === 'Nurse' ? 'Current workplace (optional)' : role === 'College' ? 'College / institution name' : 'Hospital / organisation name'}<input name="organisation" value={form.organisation} onChange={update} placeholder="Organisation name" required={role !== 'Nurse'}/></label>
            <label>City<input name="city" value={form.city} onChange={update} placeholder="City" required autoComplete="address-level2"/></label>
            <label>Work email<input type="email" name="email" value={form.email} onChange={update} placeholder="name@organisation.com" required autoComplete="email"/></label>
            <label>Phone number<input type="tel" name="phone" value={form.phone} onChange={update} placeholder="10-digit mobile number" pattern="[0-9+() -]{10,}" required autoComplete="tel"/></label>
            <label className="full-field">{role === 'Hospital' ? 'Organisation type' : role === 'College' ? 'Institution type' : 'Specialty'}<span className="select-wrap"><select name="type" value={form.type} onChange={update} required><option value="" disabled>{role === 'Hospital' ? 'Hospital / Clinic / Home care / Other' : role === 'College' ? 'College / University / Training institute / Other' : 'Select your specialty'}</option>{(role === 'Hospital' ? ['Hospital','Clinic','Home care','Other'] : role === 'College' ? ['College','University','Training institute','Other'] : ['General nursing','Critical care','Emergency','Other']).map(x => <option key={x}>{x}</option>)}</select><ChevronDown size={18}/></span></label>
            <label className="full-field">Create password<span className="password-wrap"><input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={update} placeholder="Create a strong password" minLength={8} required autoComplete="new-password"/><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}</button></span></label>
          </div>}
          {step === 2 && <div className="step-content"><p>We’ll use these details to verify your account.</p><div className="review-box"><strong>{form.email || 'Your email address'}</strong><span>{form.phone || 'Your phone number'}</span></div><label>Verification code<input name="verificationCode" inputMode="numeric" placeholder="Enter the 6-digit code" minLength={6} maxLength={6} required/></label><p className="helper-text">Demo mode: no verification message is sent.</p></div>}
          {step === 3 && <div className="step-content"><p>Review the account information before finishing.</p><div className="review-box"><strong>{form.organisation || form.name}</strong><span>{form.name} · {form.designation}</span><span>{form.city} · {form.email}</span><span>{form.type || 'Account type not selected'}</span></div><label>Hiring / profile requirements<textarea placeholder="Tell us a little about your requirements (optional)" rows="3"/></label></div>}
          <label className="terms-check"><input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)}/><span>I agree to the <a href="/terms/">Terms of Use</a> and <a href="/privacy/">Privacy Policy</a>.</span></label>
          <button className="primary-button" type="submit">{step === 1 ? `Create ${role.toLowerCase()} account` : step === 2 ? 'Verify contact details' : 'Complete registration'} <ArrowUpRight size={21}/></button>
          <p className="form-note">{step === 1 ? 'Verify your contact details, then add organisation and hiring requirements.' : step === 2 ? 'Your contact details are the first step to a trusted account.' : 'You can update your profile details later.'}</p>
        </form>}
        <div className="reg-bottom">Already registered? <a href="/sign-in/">Sign in <ArrowRight size={18}/></a></div>
      </div></section>
    </section></main>
    <footer className="reg-footer"><div className="reg-footer-inner"><div className="footer-brand"><Logo footer/><span>Your skills. Your next step.</span></div><nav><a href="/">Home</a><a href="/#destinations">Destinations</a><a href="/courses/">Courses</a><a href="/#employers">For Hospitals</a><a href="/career-desk/">Career Desk</a><a href="/#contact">Contact</a></nav><div className="footer-email"><a href="mailto:admin@fdhs.in">admin@fdhs.in</a><small>Design concept · Illustrative imagery</small></div></div></footer>
  </div>;
}
