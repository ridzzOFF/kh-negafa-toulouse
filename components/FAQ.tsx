'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: "Quels types de tenues proposez-vous à la location ?",
    a: "Nous proposons une sélection exclusive de caftans marocains, takchitas deux pièces, karakous algérois et robes de mariée orientales. Chaque pièce est brodée à la main par des artisans Maâlams et ornée de perlages cristal.",
  },
  {
    q: "Comment se déroule un essayage ?",
    a: "L'essayage se fait sur rendez-vous uniquement, dans un cadre intimiste et raffiné. Comptez environ 1h à 1h30. Nous vous conseillons sur les tailles, les accessoires et le style selon votre morphologie et votre cérémonie.",
  },
  {
    q: "Quels sont vos tarifs de location ?",
    a: "Les prix de location varient selon les pièces, à partir de 150 €. Une caution par chèque ou empreinte bancaire est demandée (voir fiche de chaque tenue). Cette caution est intégralement restituée si la tenue est rendue en parfait état.",
  },
  {
    q: "Proposez-vous des retouches ?",
    a: "Oui, des ajustements mineurs (ourlets, pinces) peuvent être réalisés. Certaines retouches importantes peuvent faire l'objet d'un supplément. Nous vous conseillons lors de l'essayage sur les possibilités.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Nous recommandons de réserver au minimum 2 à 3 mois avant la date du mariage pour garantir la disponibilité des pièces souhaitées. Certaines dates très demandées (printemps, été) se réservent parfois 6 mois à l'avance.",
  },
  {
    q: "Quels sont les modes de paiement acceptés ?",
    a: "Nous acceptons les virements bancaires, le paiement en espèces et les chèques. Un acompte de 30 % est demandé à la réservation, le solde est dû au plus tard 7 jours avant l'événement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <p className="pretitle">Questions fréquentes</p>
          <h2 className="section-title">FAQ</h2>
          <div className="diamonds-row" style={{ maxWidth: 240, margin: '0 auto' }}>
            <div className="d-line" />
            <div className="d-lg" /><div className="d-sm" /><div className="d-lg" />
            <div className="d-line r" />
          </div>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-icon">
                  <svg viewBox="0 0 12 12">
                    <line x1="6" y1="1" x2="6" y2="11"/>
                    <line x1="1" y1="6" x2="11" y2="6"/>
                  </svg>
                </span>
              </button>
              <div className="faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
