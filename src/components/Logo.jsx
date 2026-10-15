import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Logo.css';
export default function Logo({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#top" aria-label="FDHS Elevate home">
    <span className="brand-mark"><i></i><b></b><em></em></span>
    <span className="brand-name">FDHS <strong>elevate</strong></span>
  </a>;
}
export function ArrowLink({ children, href = '#contact', outline = false }) {
  return <a className={`btn ${outline ? 'btn-outline' : ''}`} href={href}>{children}<ArrowUpRight size={15} strokeWidth={2.4}/></a>;
}
