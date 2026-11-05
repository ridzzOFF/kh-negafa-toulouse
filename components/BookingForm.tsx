'use client';

import { useState, useEffect } from 'react';
import { PRODUCTS } from '@/data/collection';

declare global {
  interface Window {
    emailjs: {
      init: (config: { publicKey: string }) => void;
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<void>;
    };
  }
}

export default function BookingForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => window.emailjs.init({ publicKey: 'SXb7t1lsHO4iqLhio' });
    document.head.appendChild(script);
  }, []);

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    if (!String(data.get('firstName')).trim()) errs.fn = 'Prénom requis';
    if (!String(data.get('lastName')).trim()) errs.ln = 'Nom requis';
    const em = String(data.get('email')).trim();
    if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) errs.em = 'Email invalide';
    if (!String(data.get('phone')).trim()) errs.ph = 'Téléphone requis';
    if (!data.get('date')) errs.dt = 'Date requise';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const robes = selected.length
      ? selected.map(id => PRODUCTS.find(p => p.id === id)?.name).filter(Boolean).join(', ')
      : 'Non précisé';

    setSending(true);
    try {
      await window.emailjs.send('service_3cko99p', 'template_ohuixbf', {
        prenom: String(data.get('firstName')),
        nom: String(data.get('lastName')),
        email: String(data.get('email')),
        telephone: String(data.get('phone')),
        date: String(data.get('date')),
        robes,
        message: String(data.get('message') || ''),
      });
      setSent(true);
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section id="contact" className="booking">
        <div className="container">
          <div className="form-success">
            <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h3>Demande envoyée !</h3>
            <p>Merci pour votre message. Nous vous répondrons sous 24 heures ouvrées pour confirmer votre rendez-vous d'essayage.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="booking">
      <div className="container">
        <div className="section-header">
          <p className="pretitle">Rendez-vous Exclusif</p>
          <h2 className="section-title light">Réserver un Essayage</h2>
          <div className="diamonds-row" style={{ maxWidth: 240, margin: '0 auto' }}>
            <div className="d-line" />
            <div className="d-lg" /><div className="d-sm" /><div className="d-lg" />
            <div className="d-line r" />
          </div>
          <p className="section-sub light">Séance privée sur rendez-vous uniquement. Nous vous accueillons dans un cadre intimiste et raffiné.</p>
        </div>

        <form className="form-wrap" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label className="form-lbl">Prénom *</label>
              <div className="form-rel">
                <span className="form-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input className="form-input" type="text" name="firstName" placeholder="Yasmine" />
              </div>
              {errors.fn && <span className="form-err">{errors.fn}</span>}
            </div>
            <div className="form-group">
              <label className="form-lbl">Nom *</label>
              <div className="form-rel">
                <span className="form-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input className="form-input" type="text" name="lastName" placeholder="Hadjar" />
              </div>
              {errors.ln && <span className="form-err">{errors.ln}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-lbl">Adresse e-mail *</label>
              <div className="form-rel">
                <span className="form-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <input className="form-input" type="email" name="email" placeholder="yasmine@email.fr" />
              </div>
              {errors.em && <span className="form-err">{errors.em}</span>}
            </div>
            <div className="form-group">
              <label className="form-lbl">Téléphone *</label>
              <div className="form-rel">
                <span className="form-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.95 3.18 2 2 0 0 1 3.93 1h3a2 2 0 0 1 2 1.72c.16.96.45 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 16 16.91l1.27-1.27a2 2 0 0 1 2.11-.45c.91.25 1.85.54 2.81.7A2 2 0 0 1 24 17v-.08z"/></svg>
                </span>
                <input className="form-input" type="tel" name="phone" placeholder="07 44 73 38 11" />
              </div>
              {errors.ph && <span className="form-err">{errors.ph}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-lbl">Date souhaitée *</label>
            <div className="form-rel">
              <span className="form-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <input className="form-input" type="date" name="date" />
            </div>
            {errors.dt && <span className="form-err">{errors.dt}</span>}
          </div>

          <div>
            <p className="form-section-lbl">
              Robes à essayer{' '}
              <span style={{ textTransform: 'none', letterSpacing: 'normal', color: 'rgba(250,249,246,.22)' }}>(optionnel)</span>
            </p>
            <div className="cb-grid">
              {PRODUCTS.map(p => (
                <label key={p.id} className={`cb-item${selected.includes(p.id) ? ' on' : ''}`}>
                  <input type="checkbox" style={{ display: 'none' }} onChange={() => toggle(p.id)} checked={selected.includes(p.id)} />
                  <div className="cb-box">
                    <svg viewBox="0 0 10 8"><polyline points="1,4 4,7 9,1"/></svg>
                  </div>
                  <span className="cb-txt">{p.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-lbl">
              Message{' '}
              <span style={{ textTransform: 'none', letterSpacing: 'normal', color: 'rgba(250,249,246,.22)' }}>(informations complémentaires)</span>
            </label>
            <div className="form-rel">
              <span className="form-icon ta-icon">
                <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </span>
              <textarea className="form-textarea" name="message" placeholder="Votre date de mariage, tailles, demandes particulières..." />
            </div>
          </div>

          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? 'Envoi en cours…' : "Envoyer la Demande d'Essayage"}
          </button>
          <p className="form-note">* Champs obligatoires &nbsp;·&nbsp; Réponse garantie sous 24 heures ouvrées</p>
        </form>
      </div>
    </section>
  );
}
