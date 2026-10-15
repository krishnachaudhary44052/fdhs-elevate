import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Compass, FileText, Globe2 } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './destinations-pages.css';

const countries = [
  { id:'germany', name:'Germany', title:'Nursing pathways', desc:'Build a nursing career in Germany.', tags:['Recognition','German language'], img:'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85', route:'/destinations/germany/' },
  { id:'japan', name:'Japan', title:'Care-worker pathways', desc:'Explore care-worker opportunities in Japan.', tags:['SSW skills tests','Japanese language'], img:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85', route:'/career-desk/' },
  { id:'uae', name:'UAE', title:'Nursing pathways', desc:'Pursue nursing opportunities in the UAE.', tags:['Licensing','Employer selection'], img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85', route:'/career-desk/' },
  { id:'india', name:'India', title:'Healthcare opportunities', desc:'Explore nursing and care roles in India.', tags:['Clinical skills','Role eligibility'], img:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85', route:'/courses/' },
];
export default function DestinationsPage(){
 const [status,setStatus]=useState('');
 return <div className="dest-page"><Header/><main>
  <section className="dest-hero">
   <div className="dest-hero-images"><div style={{backgroundImage:`url(${countries[0].img})`}}/><div style={{backgroundImage:`url(${countries[1].img})`}}/><div style={{backgroundImage:`url(${countries[2].img})`}}/><div style={{backgroundImage:`url(${countries[3].img})`}}/></div>
   <div className="dest-hero-overlay"/><div className="dest-hero-copy"><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h1>Your career. Your destination.</h1><p>Find a route that fits your qualification and goals.</p>
    <form className="dest-route-form" onSubmit={e=>{e.preventDefault(); if(status==='Germany') location.href='/destinations/germany/'; else location.href='/career-desk/';}}><label htmlFor="dest-status">I am a</label><select id="dest-status" value={status} onChange={e=>setStatus(e.target.value)}><option value="">Select your current status</option><option>Qualified nurse</option><option>Student / after 12th</option><option>Care worker</option><option>Hospital / employer</option><option>Germany</option></select><button className="ep-btn">Explore my routes <ArrowUpRight size={17}/></button></form>
   </div>
  </section>
  <section className="dest-country-grid content-width">{countries.map(c=><article className="dest-country-card" key={c.id}><div className="dest-country-image" style={{backgroundImage:`linear-gradient(0deg,rgba(5,35,67,.94),rgba(5,35,67,0) 75%),url(${c.img})`}}><div><h2>{c.name}</h2><h3>{c.title}</h3><p>{c.desc}</p><div className="dest-tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div></div></div><div className="dest-card-actions"><a className="ep-btn" href={c.route}>Explore pathway <ArrowUpRight size={15}/></a><a className="ep-btn ep-outline" href={c.route}>Read country guide <ArrowUpRight size={15}/></a></div></article>)}</section>
  <section className="dest-compare content-width"><div className="ep-section-title"><p className="eyebrow">MAKE AN INFORMED FIRST STEP</p><h2>Compare your first step.</h2><p>A quick view of what to focus on in each destination.</p></div><div className="dest-table-wrap"><table><thead><tr><th>Country</th><th>Route</th><th>Starting focus</th></tr></thead><tbody><tr><td>🇩🇪　<strong>Germany</strong></td><td>Qualified nursing</td><td>Qualification and language review</td></tr><tr><td>🇯🇵　<strong>Japan</strong></td><td>Care work</td><td>Skills and language test readiness</td></tr><tr><td>🇦🇪　<strong>UAE</strong></td><td>Regulated nursing</td><td>Title and licensing review</td></tr><tr><td>🇮🇳　<strong>India</strong></td><td>Nursing or care roles</td><td>Qualification and role matching</td></tr></tbody></table></div></section>
  <section className="dest-guidance-band"><img src="/images/training-feature.jpg" alt="Healthcare professionals discussing career guidance"/><div><p className="eyebrow">PERSONALISED CAREER SUPPORT</p><h2>Not sure where to start?</h2><p>We'll help you compare routes before you commit.</p><a className="ep-btn" href="/contact/">Get career guidance <ArrowUpRight size={16}/></a></div></section>
  <section className="dest-bottom-cta"><div className="dest-cta-icon"><FileText size={32}/></div><div><h2>Keep up with your country.</h2><p>Explore eligibility, official requirements and dated guidance.</p></div><a className="ep-btn ep-outline" href="/career-desk/">Open Career Desk <ArrowUpRight size={16}/></a></section>
 </main><Footer/></div>
}
