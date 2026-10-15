import React, { useMemo, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, ShieldCheck, GraduationCap, UsersRound,
  ClipboardList, Plane, Search, Building2, Stethoscope, BookOpen,
  Globe2, ChevronDown, CheckCircle2
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './HomePage.css';

const destinations = [
  { name: 'Germany', subtitle: 'Nursing pathways', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=85' },
  { name: 'Japan', subtitle: 'Care-worker pathways', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85' },
  { name: 'UAE', subtitle: 'Nursing pathways', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85' },
  { name: 'India', subtitle: 'Healthcare opportunities', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85' },
];

const courses = [
  { title: 'Clinical Nursing Foundations', level: 'Foundation', specialty: 'Core skills', destination: 'India', price: '₹10,000', image: '/images/course-clinical-nursing.jpg' },
  { title: 'ICU & Critical Care', level: 'Intermediate', specialty: 'ICU & Critical Care', destination: 'India · UAE', price: '₹10,000', image: '/images/course-icu-critical-care.jpg' },
  { title: 'German Language Preparation', level: 'Foundation', specialty: 'Language', destination: 'Germany', price: '₹10,000', image: '/images/course-german-language.jpg' },
];

const specialties = ['All', 'ICU & Critical Care', 'Emergency & Trauma', 'Cardiac & ECG Care', 'Maternal & Neonatal', 'Oncology & Cancer Care', 'Orthopaedics & Rehab', 'Neurology & Neurosurgery', 'Mental Health'];

function SectionTitle({ eyebrow, title, description, action, href = '/courses/' }) {
  return <div className="hp-section-title">
    <div>{eyebrow && <p className="hp-eyebrow">{eyebrow}</p>}<h2>{title}</h2>{description && <p className="hp-subtitle">{description}</p>}</div>
    {action && <a className="hp-text-link" href={href}>{action} <ArrowUpRight size={16}/></a>}
  </div>;
}

export default function HomePage() {
  const [level, setLevel] = useState('All levels');
  const [destination, setDestination] = useState('All countries');
  const [specialty, setSpecialty] = useState('All');
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', organisation: '', email: '', need: '', requirements: '' });
  const [sent, setSent] = useState(false);

  const visibleCourses = useMemo(() => courses.filter(course => {
    const query = search.toLowerCase();
    const matchesSearch = course.title.toLowerCase().includes(query);
    const matchesLevel = level === 'All levels' || course.level === level;
    const matchesDestination = destination === 'All countries' || course.destination.includes(destination);
    const matchesSpecialty = specialty === 'All' || course.specialty === specialty || (specialty === 'Language' && course.title.toLowerCase().includes('language'));
    return matchesSearch && matchesLevel && matchesDestination && matchesSpecialty;
  }), [level, destination, specialty, search]);

  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submitEnquiry = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return <div className="homepage">
    <Header />
    <main>
      <section className="hp-hero">
        <div className="hp-hero-image" />
        <div className="hp-hero-shade" />
        <div className="hp-hero-content">
          <p className="hp-hero-kicker">HEALTHCARE CAREERS. INDIA &amp; BEYOND.</p>
          <div className="hp-hero-columns">
            <div className="hp-hero-panel">
              <p>For Nurses</p>
              <h1>Find your next<br/><span>nursing role.</span></h1>
              <p className="hp-hero-desc">Build your profile. Explore opportunities.</p>
              <a className="hp-button" href="/register/">Register as a nurse <ArrowUpRight size={17}/></a>
            </div>
            <div className="hp-hero-divider" />
            <div className="hp-hero-panel hp-hospital-panel">
              <p>For Hospitals</p>
              <h2>Hire nurses.<br/><span>Build your team.</span></h2>
              <p className="hp-hero-desc">Tell us who you need. We'll help you hire.</p>
              <a className="hp-button hp-button-light" href="/contact/">Share hiring needs <ArrowRight size={17}/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-trust-strip" aria-label="Our support">
        <div><ShieldCheck/><span>Verified profiles</span></div>
        <i/>
        <div><GraduationCap/><span>Clinical training</span></div>
        <i/>
        <div><UsersRound/><span>Placement support</span></div>
      </section>

      <section className="hp-destinations hp-container" id="destinations">
        <SectionTitle title="Where do you want to go?" action="Explore destinations" href="/career-desk/"/>
        <div className="hp-destination-grid">
          {destinations.map(place => <a className="hp-destination-card" href="/career-desk/" key={place.name}>
            <img src={place.image} alt={`${place.name} destination`} loading="lazy"/>
            <span className="hp-card-shade"/>
            <span className="hp-destination-copy"><strong>{place.name}</strong><small>{place.subtitle}</small></span>
            <span className="hp-round-arrow"><ArrowRight size={16}/></span>
          </a>)}
        </div>
        <p className="hp-helper">Choose a destination. We'll guide your next step.</p>
      </section>

      <section className="hp-hospital-network">
        <div className="hp-container">
          <SectionTitle eyebrow="HOSPITAL NETWORK" title={<>Trusted by India’s <em>leading hospitals.</em></>} description="A network built around clinical learning and healthcare hiring."/>
          <div className="hp-partner-list"><span>Palam Vihar Hospital</span><i/><span>RSIC Mohali</span><i/><span>Park Hospital</span><i/><span>Bharat Oncology</span><i/><span>JP Hospital</span></div>
        </div>
      </section>

      <section className="hp-pathway">
        <div className="hp-container">
          <SectionTitle eyebrow="YOUR INTERNATIONAL PATHWAY" title="A clear route forward."/>
          <div className="hp-steps">
            <div className="hp-step"><span className="hp-step-icon"><ClipboardList/></span><b>01</b><strong>Skills Assessment</strong><p>Free review of your skills and country requirements.</p></div>
            <div className="hp-step"><span className="hp-step-icon"><UsersRound/></span><b>02</b><strong>Targeted Training</strong><p>Build the clinical skills your next role needs.</p></div>
            <div className="hp-step"><span className="hp-step-icon"><ClipboardList/></span><b>03</b><strong>Exam Preparation</strong><p>Practise for licensing exams and interviews.</p></div>
            <div className="hp-step"><span className="hp-step-icon"><Plane/></span><b>04</b><strong>Placement Abroad</strong><p>Get support with offers, documents and visa steps.</p></div>
          </div>
        </div>
      </section>

      <section className="hp-courses hp-container" id="courses">
        <SectionTitle eyebrow="TRAIN FOR YOUR NEXT STEP" title="Find the right course." description="Filter by level, specialty or destination." action="Explore all courses" href="/courses/"/>
        <div className="hp-course-search"><Search size={17}/><input aria-label="Search courses" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses"/></div>
        <div className="hp-filter-row"><strong>Level</strong>{['All levels', 'Foundation', 'Intermediate', 'Advanced'].map(x => <button key={x} className={level === x ? 'selected' : ''} onClick={() => setLevel(x)}>{x}</button>)}</div>
        <div className="hp-filter-row"><strong>Destination</strong>{['All countries', 'Germany', 'Japan', 'UAE', 'India'].map(x => <button key={x} className={destination === x ? 'selected' : ''} onClick={() => setDestination(x)}>{x}</button>)}</div>
        <div className="hp-filter-row hp-specialty-row"><strong>Specialty</strong><div>{specialties.map(x => <button key={x} className={specialty === x ? 'selected' : ''} onClick={() => setSpecialty(x)}>{x}</button>)}</div></div>
        <div className="hp-course-grid">
          {visibleCourses.map(course => <article className="hp-course-card" key={course.title}>
            <img src={course.image} alt="" loading="lazy"/>
            <div className="hp-course-body"><h3>{course.title}</h3><div className="hp-tags"><span>{course.level}</span><span>{course.specialty}</span><span>{course.destination}</span></div><p><strong>{course.price}</strong><span> · Sample price</span></p><a href="/courses/">View course <ArrowUpRight size={14}/></a></div>
          </article>)}
          {!visibleCourses.length && <p className="hp-no-results">No courses match those filters. Try another selection.</p>}
        </div>
        <p className="hp-partner-note"><CheckCircle2 size={15}/> Practical training partner: MedUMass <a href="/courses/">Explore all courses <ArrowUpRight size={14}/></a></p>
      </section>

      <section className="hp-career-desk">
        <div className="hp-career-map"/>
        <div className="hp-container hp-career-inner">
          <div><p className="hp-eyebrow">CAREER DESK</p><h2>Know the route<br/>before you take it.</h2><p>Eligibility, language, licensing and official<br className="hp-desktop-only"/> country guidance.</p><a className="hp-button" href="/career-desk/">Explore Career Desk <ArrowUpRight size={17}/></a></div>
          <div className="hp-country-links">{[['🇩🇪','Germany'],['🇯🇵','Japan'],['🇦🇪','UAE'],['🇮🇳','India']].map(([flag,name]) => <a href="/career-desk/" key={name}><span>{flag}</span>{name}<ChevronDown size={15}/></a>)}</div>
        </div>
      </section>

      <section className="hp-employers" id="employers">
        <div className="hp-container hp-employers-inner">
          <div className="hp-employers-copy"><p className="hp-eyebrow">FOR HOSPITALS &amp; COLLEGES</p><h2>Better prepared people.<br/><span>Stronger healthcare teams.</span></h2><p>Recruitment&nbsp; · &nbsp;Workforce outsourcing&nbsp; · &nbsp;Campus partnerships</p><div className="hp-employer-buttons"><a href="/contact/">Discuss hiring <ArrowRight size={15}/></a><a href="/contact/">Partner with us <ArrowRight size={15}/></a></div></div>
          <form className="hp-enquiry-form" onSubmit={submitEnquiry}>
            <h3>Tell us what you need.</h3>
            {sent ? <div className="hp-success"><CheckCircle2/> Thanks! Your enquiry details are ready. Connect this form to your backend to receive submissions.</div> : <>
              <div className="hp-form-grid"><input name="name" value={form.name} onChange={updateForm} placeholder="Full name" required/><input name="organisation" value={form.organisation} onChange={updateForm} placeholder="Hospital / college" required/><input name="phone" value={form.phone} onChange={updateForm} placeholder="Phone number" required/><input name="email" type="email" value={form.email} onChange={updateForm} placeholder="Email address" required/></div>
              <select name="need" value={form.need} onChange={updateForm} required><option value="">I'm looking for</option><option>Recruitment</option><option>Outsourcing</option><option>Partnership</option></select>
              <textarea name="requirements" value={form.requirements} onChange={updateForm} placeholder="Hiring requirements: roles, location and number of openings" rows="2" required/>
              <button type="submit">Send enquiry <ArrowUpRight size={16}/></button>
            </>}
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
