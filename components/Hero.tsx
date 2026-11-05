'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoad = () => v.classList.add('loaded');
    const onEnd = () => v.classList.remove('loaded');
    v.addEventListener('canplay', onLoad);
    v.addEventListener('ended', onEnd);
    return () => {
      v.removeEventListener('canplay', onLoad);
      v.removeEventListener('ended', onEnd);
    };
  }, []);

  return (
    <section id="accueil" className="hero">
      <div className="hero-bg-img" />
      <div className="hero-bg-overlay" />
      <video
        ref={videoRef}
        className="hero-video"
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="hero-pattern" />
      <div className="hero-vignette" />

      <div className="hero-content">
        <h1 className="hero-title">
          L'Art de Sublimer<br />
          <em>Votre Union</em>
        </h1>
        <p className="hero-sub">
          Prestataire Negafa &amp; location de robes traditionnelles maghrébines.
          Toulouse &amp; environs, sur rendez-vous exclusif.
        </p>
        <div className="hero-btns">
          <a href="#collection" className="btn-gold">Découvrir la Collection</a>
          <a href="#contact" className="btn-outline">Réserver un Essayage</a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-hint-line" />
        <span>Défiler</span>
      </div>

      <div className="hero-fade" />
    </section>
  );
}
