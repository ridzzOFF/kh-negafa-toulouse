'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [khOpen, setKhOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <div className="navbar-logo" onClick={() => setKhOpen(true)} title="Notre histoire">
            <Image src="/images/logo-kh-negefa.png" alt="K.H Négafa Toulouse" width={150} height={150} priority />
            <div className="logo-hint">
              <span className="logo-hint-line" />
              <span className="logo-hint-text">Notre histoire</span>
            </div>
          </div>

          <ul className="navbar-nav">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#prestations">Prestations</a></li>
            <li><a href="#tarifs">Caution &amp; Tarifs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="btn-nav-cta">Essayage</a>

          <button
            id="burger"
            className={`burger${menuOpen ? ' open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#accueil" className="nav-mobile-link" onClick={closeMenu}>Accueil</a>
        <a href="#collection" className="nav-mobile-link" onClick={closeMenu}>Collection</a>
        <a href="#prestations" className="nav-mobile-link" onClick={closeMenu}>Prestations</a>
        <a href="#tarifs" className="nav-mobile-link" onClick={closeMenu}>Caution &amp; Tarifs</a>
        <a href="#contact" className="nav-mobile-link" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="btn-gold" style={{ fontSize: '.65rem' }} onClick={closeMenu}>Réserver un Essayage</a>
      </div>

      {/* Kheïra overlay */}
      {khOpen && <KheiraOverlay onClose={() => setKhOpen(false)} />}
    </>
  );
}

function KheiraOverlay({ onClose }: { onClose: () => void }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = [
    '/images/kheira-bg-1.jpg',
    '/images/kheira-bg-2.jpg',
    '/images/kheira-bg-3.jpg',
    '/images/kheira-bg-4.jpg',
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const id = setInterval(() => setSlideIdx(i => (i + 1) % slides.length), 10000);
    return () => {
      clearInterval(id);
      document.body.style.overflow = '';
    };
  }, [slides.length]);

  return (
    <div className="kh-overlay open">
      <div className="kh-slides">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`kh-slide${i === slideIdx ? ' active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="kh-veil" />
      <div className="kh-panel">
        <div className="kh-logo-wrap">
          <Image src="/images/logo-kh-negefa.png" alt="K.H Négafa" width={200} height={200} />
        </div>
        <div className="kh-divider" />
        <p className="kh-pretitle">Fondatrice & Artiste Negafa</p>
        <h2 className="kh-title">
          Kheïra, l'âme<br />de <em>K.H Négafa</em>
        </h2>
        <p className="kh-body">
          Passionnée depuis l'enfance par les tenues traditionnelles maghrébines, Kheïra a fondé K.H Négafa Toulouse avec une seule ambition : sublimer chaque mariée en préservant l'authenticité et la splendeur de nos traditions.
        </p>
        <p className="kh-body">
          Chaque pièce de notre collection est sélectionnée avec soin, chaque essayage est un moment unique, pensé pour que vous vous sentiez véritablement reine le jour de votre union.
        </p>
        <p className="kh-signature">— Kheïra H.</p>
        <button className="kh-back" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Revenir au site</span>
        </button>
      </div>
    </div>
  );
}
