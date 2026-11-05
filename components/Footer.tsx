'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [mlOpen, setMlOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-line" />
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <Image src="/images/logo-kh-negefa.png" alt="K.H Négafa Toulouse" width={250} height={250} className="footer-brand-logo" />
              <p className="footer-brand-d">Prestataire Negafa haut de gamme et location de robes traditionnelles maghrébines. L'art de sublimer votre union depuis plus de 15 ans.</p>
              <div className="footer-socials">
                <a href="#" className="soc-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className="soc-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <p className="footer-col-t">Navigation</p>
              <nav className="footer-nav">
                <a href="#accueil">Accueil</a>
                <a href="#collection">Collection</a>
                <a href="#prestations">Prestations</a>
                <a href="#tarifs">Caution &amp; Tarifs</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div>
              <p className="footer-col-t">Contact</p>
              <div className="footer-contacts">
                <a href="tel:+33744733811" className="footer-ct">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.95 3.18 2 2 0 0 1 3.93 1h3a2 2 0 0 1 2 1.72c.16.96.45 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 16 16.91l1.27-1.27a2 2 0 0 1 2.11-.45c.91.25 1.85.54 2.81.7A2 2 0 0 1 24 17v-.08z"/></svg>
                  07 44 73 38 11
                </a>
                <a href="mailto:kreri.ridwane31@gmail.com" className="footer-ct">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  kreri.ridwane31@gmail.com
                </a>
                <div className="footer-ct">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Sur rendez-vous uniquement<br />Toulouse &amp; environs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2026 K.H Négafa Toulouse. Tous droits réservés. &nbsp;·&nbsp;
              <button className="footer-ml-link" onClick={() => setMlOpen(true)}>Mentions légales</button>
            </p>
            <p className="footer-slogan">L'Art et le Prestige de Sublimer Votre Union</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/33744733811?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20essayage%20chez%20K.H%20N%C3%A9gafa%20Toulouse."
        className="wa-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
      >
        <div className="wa-pulse" />
        <span className="wa-tooltip">Contactez-nous sur WhatsApp</span>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.004 2C6.49 2 2.014 6.476 2.014 11.99c0 1.774.464 3.441 1.272 4.892L2 22l5.272-1.258c1.388.757 2.983 1.187 4.683 1.187h.004c5.514 0 9.99-4.476 9.99-9.99S17.518 2 12.004 2z"/>
        </svg>
      </a>

      {/* Mentions légales modal */}
      <div className={`ml-overlay${mlOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && setMlOpen(false)}>
        <div className="ml-panel">
          <button className="ml-close" onClick={() => setMlOpen(false)} aria-label="Fermer">×</button>
          <h2>Mentions Légales</h2>
          <h3>Éditeur du site</h3>
          <p><strong>K.H Négafa Toulouse</strong><br />Auto-entrepreneur — Prestation Negafa &amp; Location de robes<br />Toulouse (31), France<br />Email : kreri.ridwane31@gmail.com<br />Téléphone : 07 44 73 38 11</p>
          <h3>Directrice de la publication</h3>
          <p>Kheïra H. — fondatrice de K.H Négafa Toulouse</p>
          <h3>Hébergement</h3>
          <p>Ce site est hébergé par un prestataire web. Les coordonnées de l'hébergeur sont disponibles sur demande.</p>
          <h3>Propriété intellectuelle</h3>
          <p>L'ensemble des contenus présents sur ce site (textes, images, logo, vidéos) est la propriété exclusive de K.H Négafa Toulouse. Toute reproduction, même partielle, est strictement interdite sans autorisation écrite préalable.</p>
          <h3>Données personnelles (RGPD)</h3>
          <p>Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre à votre demande d'essayage. Elles ne sont jamais cédées à des tiers.</p>
          <h3>Cookies</h3>
          <p>Ce site n'utilise pas de cookies de tracking ou publicitaires.</p>
        </div>
      </div>
    </>
  );
}
