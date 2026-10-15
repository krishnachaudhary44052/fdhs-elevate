import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, UserRound, Building2, GraduationCap,
  MessageCircleMore, Mail, MapPin, ChevronDown, ChevronUp, UserRoundPlus
} from 'lucide-react';
import './ContactEnquiry.css';

const enquiryTypes = [
  { id: 'nurses', label: 'Nurses', detail: 'Careers and course guidance', Icon: UserRound, action: 'Register as a nurse' },
  { id: 'hospitals', label: 'Hospitals', detail: 'Hiring and outsourcing', Icon: Building2, action: 'Register your hospital' },
  { id: 'colleges', label: 'Colleges', detail: 'Campus and training partnerships', Icon: GraduationCap, action: 'Register your college' },
  { id: 'general', label: 'General enquiry', detail: 'Other questions', Icon: MessageCircleMore, action: 'Contact our team' },
];

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  qualification: '',
  destination: '',
  message: '',
  consent: false,
};

function Brand({ footer = false }) {
  return (
    <a className={`contact-brand ${footer ? 'contact-brand-footer' : ''}`} href="/" aria-label="FDHS Elevate home">
      <span className="contact-brand-symbol" aria-hidden="true"><i /><i /><i /></span>
      <span>FDHS <strong>elevate</strong></span>
    </a>
  );
}

function Header() {
  return (
    <header className="contact-header">
      <div className="contact-header-inner">
        <Brand />
        <nav className="contact-main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#destinations">Destinations</a>
          <a href="/courses/">Courses</a>
          <a href="/#hospitals">For Hospitals</a>
          <a href="/career-desk/">Career Desk</a>
          <a className="active" href="/contact/">Contact</a>
        </nav>
        <div className="contact-header-actions">
          <a href="/signin/" className="contact-signin"><UserRound size={22} /><span>Sign in</span></a>
          <a href="/register/" className="contact-register">Register <ArrowUpRight size={19} /></a>
        </div>
      </div>
    </header>
  );
}

function ContactHero() {
  return (
    <section className="contact-hero">
      <img src="/images/contact-enquiry-hero.png" alt="Healthcare professionals discussing career opportunities" />
      <div className="contact-hero-shade" />
      <div className="contact-hero-content">
        <h1>Let’s talk about<br />your next step.</h1>
        <p>Choose the right desk. We’ll guide you from there.</p>
      </div>
    </section>
  );
}

function EnquiryForm({ activeType, setActiveType }) {
  const [form, setForm] = useState(initialForm);
  const [notice, setNotice] = useState('');
  const selected = enquiryTypes.find((item) => item.id === activeType) || enquiryTypes[0];

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
    setNotice('');
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.consent) {
      setNotice('Please agree to be contacted about this enquiry.');
      return;
    }
    setNotice('Thank you! Your enquiry has been validated in this demo. Connect your backend to submit it to your team.');
  };

  return (
    <section className="contact-form-card">
      <div className="contact-type-tabs" role="tablist" aria-label="Enquiry type">
        {enquiryTypes.map(({ id, label, Icon }) => (
          <button key={id} type="button" role="tab" aria-selected={activeType === id}
            className={`contact-type-tab ${activeType === id ? 'selected' : ''}`}
            onClick={() => setActiveType(id)}>
            <Icon size={26} strokeWidth={1.7} /><span>{label}</span>
          </button>
        ))}
      </div>

      <div className="contact-form-inner">
        <h2>{activeType === 'nurses' ? 'Tell us about your career goals.' : activeType === 'hospitals' ? 'Tell us about your hiring needs.' : activeType === 'colleges' ? 'Tell us about your institution.' : 'How can we help you?'}</h2>
        <p className="contact-form-intro">Our team will guide you with the right opportunities.</p>

        <form onSubmit={submit}>
          <div className="contact-form-grid">
            <label className="contact-field">
              <span>Full name <b>*</b></span>
              <input name="fullName" value={form.fullName} onChange={update} placeholder="Your full name" autoComplete="name" required />
            </label>
            <label className="contact-field">
              <span>Phone number <b>*</b></span>
              <input name="phone" value={form.phone} onChange={update} placeholder="Your phone number" type="tel" autoComplete="tel" required />
            </label>
            <label className="contact-field">
              <span>Email address <b>*</b></span>
              <input name="email" value={form.email} onChange={update} placeholder="Your email address" type="email" autoComplete="email" required />
            </label>
            <label className="contact-field">
              <span>City <b>*</b></span>
              <input name="city" value={form.city} onChange={update} placeholder="Your city" autoComplete="address-level2" required />
            </label>
            <label className="contact-field">
              <span>{activeType === 'nurses' ? 'Current qualification' : activeType === 'hospitals' ? 'Organisation type' : activeType === 'colleges' ? 'Institution type' : 'Area of enquiry'} <b>*</b></span>
              <span className="contact-select-wrap">
                <select name="qualification" value={form.qualification} onChange={update} required>
                  <option value="" disabled>{activeType === 'nurses' ? 'Select qualification' : 'Select an option'}</option>
                  {activeType === 'nurses' ? <>
                    <option value="GNM">GNM</option><option value="BSc Nursing">BSc Nursing</option><option value="Post Basic BSc Nursing">Post Basic BSc Nursing</option><option value="MSc Nursing">MSc Nursing</option><option value="Other">Other</option>
                  </> : activeType === 'hospitals' ? <>
                    <option value="Hospital">Hospital</option><option value="Clinic">Clinic</option><option value="Home care">Home care</option><option value="Other">Other</option>
                  </> : activeType === 'colleges' ? <>
                    <option value="Nursing college">Nursing college</option><option value="Medical college">Medical college</option><option value="Training institute">Training institute</option><option value="Other">Other</option>
                  </> : <>
                    <option value="Courses">Courses</option><option value="Partnership">Partnership</option><option value="Career guidance">Career guidance</option><option value="Other">Other</option>
                  </>}
                </select>
                <ChevronDown size={17} />
              </span>
            </label>
            <label className="contact-field">
              <span>Preferred destination <b>*</b></span>
              <span className="contact-select-wrap">
                <select name="destination" value={form.destination} onChange={update} required>
                  <option value="" disabled>Select destination</option>
                  <option value="India">India</option><option value="Germany">Germany</option><option value="Japan">Japan</option><option value="UAE">UAE</option><option value="Not sure yet">Not sure yet</option>
                </select>
                <ChevronDown size={17} />
              </span>
            </label>
            <label className="contact-field contact-field-wide">
              <span>How can we help? <b>*</b></span>
              <textarea name="message" value={form.message} onChange={update} placeholder="Tell us about your goals, interests or any questions..." required />
            </label>
          </div>

          <label className="contact-consent">
            <input type="checkbox" name="consent" checked={form.consent} onChange={update} />
            <span>I agree to be contacted about this enquiry.</span>
          </label>
          {notice && <p className="contact-form-notice" role="status">{notice}</p>}
          <button className="contact-submit" type="submit">Send enquiry <ArrowUpRight size={20} /></button>
        </form>

        <div className="contact-form-bottom">
          <span>Ready to apply?</span>
          <a href={activeType === 'nurses' ? '/register/nurse' : activeType === 'hospitals' ? '/register/hospital' : activeType === 'colleges' ? '/register/college' : '/register/'}>
            {selected.action} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function DeskSidebar({ activeType, setActiveType }) {
  return (
    <aside className="contact-sidebar">
      <h2>The right desk for you.</h2>
      <p className="contact-sidebar-intro">Choose an enquiry type and we’ll connect you with the right team.</p>
      <div className="contact-desk-list">
        {enquiryTypes.map(({ id, label, detail, Icon }) => (
          <button key={id} type="button" className={`contact-desk-item ${activeType === id ? 'active' : ''}`} onClick={() => setActiveType(id)}>
            <Icon size={34} strokeWidth={1.65} />
            <span className="contact-desk-copy"><strong>{label}</strong><small>{detail}</small></span>
            <ChevronDown className="contact-desk-arrow" size={19} />
          </button>
        ))}
      </div>
      <div className="contact-direct">
        <h3>Contact us directly.</h3>
        <div className="contact-direct-row">
          <Mail size={30} strokeWidth={1.6} />
          <div><span>Email</span><a href="mailto:admin@fdhs.in">admin@fdhs.in</a></div>
        </div>
        <div className="contact-direct-row">
          <MapPin size={32} strokeWidth={1.6} />
          <div><span>Location</span><p>Palam Vihar, Gurugram</p></div>
        </div>
      </div>
    </aside>
  );
}

function BeforeYouReachOut() {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    { question: 'Do I need an account to enquire?', answer: 'You can send an enquiry without creating an account.' },
    { question: 'Can my college or hospital partner with Elevate?', answer: 'Yes. Choose Colleges or Hospitals above and tell us about your institution. Our team can follow up about training, career guidance, hiring or placement partnerships.' },
  ];

  return (
    <section className="contact-faq-section">
      <h2>Before you reach out.</h2>
      <p>Quick answers to common questions.</p>
      <div className="contact-faq-list">
        {faqs.map((faq, index) => (
          <div className={`contact-faq ${openFaq === index ? 'open' : ''}`} key={faq.question}>
            <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
              <span>{faq.question}</span>{openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openFaq === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function SignInBanner() {
  return (
    <section className="contact-signin-banner">
      <span className="contact-signin-badge"><UserRoundPlus size={42} strokeWidth={1.6} /></span>
      <div className="contact-signin-copy">
        <h2>Already registered?</h2>
        <p>Sign in to track your enquiries and explore new opportunities.</p>
      </div>
      <a href="/signin/">Sign in <ArrowRight size={19} /></a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="contact-footer">
      <Brand footer />
      <span className="contact-footer-tagline">Your skills. Your next step.</span>
      <nav aria-label="Footer navigation">
        <a href="/">Home</a><a href="/#destinations">Destinations</a><a href="/courses/">Courses</a><a href="/#hospitals">For Hospitals</a><a href="/career-desk/">Career Desk</a><a href="/contact/">Contact</a>
      </nav>
      <div className="contact-footer-meta"><a href="mailto:admin@fdhs.in">admin@fdhs.in</a><small>Design concept · Illustrative imagery</small></div>
    </footer>
  );
}

export default function ContactEnquiry() {
  const [activeType, setActiveType] = useState('nurses');

  return (
    <div className="contact-enquiry-page">
      <Header />
      <ContactHero />
      <main className="contact-page-main">
        <div className="contact-content-grid">
          <EnquiryForm activeType={activeType} setActiveType={setActiveType} />
          <DeskSidebar activeType={activeType} setActiveType={setActiveType} />
        </div>
        <BeforeYouReachOut />
        <SignInBanner />
      </main>
      <Footer />
    </div>
  );
}
