// import React, { useState } from 'react';
// import { Menu, X, ArrowUpRight } from 'lucide-react';
// import Logo, { ArrowLink } from './Logo.jsx';
// import './Header.css';
// export default function Header(){
//  const [open,setOpen]=useState(false);
//  return <header className="site-header" id="top">
//     <div className="header-inner"><Logo/>
//     <button className="mobile-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
//     <nav className={open?'nav nav-open':'nav'}>
//         <a href="#pathway" onClick={()=>setOpen(false)}>Your pathway</a>
//         <a href="#destinations" onClick={()=>setOpen(false)}>Destinations</a>
//         <a href="/courses/" onClick={()=>setOpen(false)}>Courses</a>
//         <a href="/career-desk/" onClick={()=>setOpen(false)}>Career Desk</a>
//         <a href="#employers" onClick={()=>setOpen(false)}>For Hospitals</a>
//         <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        
//         </nav><a className="header-cta" href="/register/">Register <ArrowUpRight size={15}/></a>
//         </div></header>
// }
import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, UserRound } from 'lucide-react';
import Logo from './Logo.jsx';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Logo />

        <button
          className="mobile-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Toggle navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={open ? 'nav nav-open' : 'nav'}
          aria-label="Main navigation"
        >
          <a href="/#top" onClick={closeMenu}>Home</a>
          <a href="/destinations/" onClick={closeMenu}>Destinations</a>
          <a href="/courses/" onClick={closeMenu}>Courses</a>
          <a href="/for-hospitals/" onClick={closeMenu}>For Hospitals</a>
          <a href="/career-desk/" onClick={closeMenu}>Career Desk</a>
          <a href="/contact/" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <a
            className="header-signin"
            href="/signin/"
            aria-label="Sign in"
          >
            <UserRound size={20} />
            <span>Sign in</span>
          </a>

          <a className="header-cta" href="/register/">
            Register
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
