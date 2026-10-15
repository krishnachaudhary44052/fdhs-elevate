import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './Destinations.css';
const places=[
 {name:'Germany',sub:'Nursing pathways',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=700&q=85'},
 {name:'Japan',sub:'Care-worker pathways',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=85'},
 {name:'UAE',sub:'Nursing pathways',image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=85'},
 {name:'India',sub:'Healthcare opportunities',image:'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=85'}
];
export default function Destinations(){return <section className="destinations section-wrap" id="destinations"><div className="section-heading"><h2>Where do you want to go?</h2><a href="#guidance">Explore your options <ArrowUpRight size={15}/></a></div><div className="destination-grid">{places.map(p=><a className="destination-card" href="#guidance" key={p.name}><img src={p.image} alt={`${p.name} destination`} loading="lazy"/><div className="destination-overlay"></div><div className="destination-text"><h3>{p.name}</h3><p>{p.sub}</p></div><span className="round-arrow"><ArrowRight size={15}/></span></a>)}</div></section>}
