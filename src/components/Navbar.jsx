'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <Link href="/" style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#fff'}}>Mbua Nene</Link>
        </div>
        <div>
          <Link href="/" style={{marginRight: '1rem', color: '#fff'}}>Home</Link>
          <Link href="/about" style={{marginRight: '1rem', color: '#fff'}}>About</Link>
          <Link href="/contact" style={{color: '#fff'}}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}