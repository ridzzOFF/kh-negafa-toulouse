'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Product, CAT_LBL } from '@/data/collection';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product: p, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box modal-content" role="dialog" aria-modal="true" aria-label={p.name}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div className="modal-img-col">
          <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
          <span className="modal-cat-badge">{CAT_LBL[p.cat]}</span>
        </div>

        <div className="modal-detail-col">
          <div className="avail-row">
            <div className={`avail-dot ${p.ok ? 'ok' : 'no'}`} />
            <span className="avail-txt">{p.ok ? 'Disponible à la location' : 'Actuellement réservée'}</span>
          </div>

          <div>
            <h2 className="modal-name">{p.name}</h2>
            <p className="modal-desc-p">{p.desc}</p>
          </div>

          <div className="modal-hr" />

          <div>
            <p className="modal-fl">Tissu</p>
            <p className="modal-fv">{p.fab}</p>
          </div>
          <div>
            <p className="modal-fl">Broderies</p>
            <p className="modal-fv">{p.emb}</p>
          </div>
          <div>
            <p className="modal-fl">Perlage</p>
            <p className="modal-fv">{p.brd}</p>
          </div>
          <div>
            <p className="modal-fl">Tailles disponibles</p>
            <div className="modal-sizes">
              {p.sizes.map(s => <span key={s} className="modal-sz">{s}</span>)}
            </div>
          </div>

          <div className="caution-box">
            <div className="caution-hdr">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span className="caution-hdr-title">Modalités de Caution</span>
            </div>
            <div className="caution-amount-row">
              <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <div>
                <p className="caution-al">Montant de la caution</p>
                <p className="caution-av">{p.caut}</p>
              </div>
            </div>
            <div className="caution-mini-hr" />
            <div className="caution-rules">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <ul>
                <li><strong>Mode de paiement :</strong> Chèque de caution ou empreinte bancaire. Non encaissé si la tenue est restituée en parfait état.</li>
                <li><strong>Vérification :</strong> Contrôle minutieux effectué ensemble à la restitution. Caution restituée intégralement sans dommages.</li>
                <li><strong>Délai de restitution :</strong> 24 à 48 heures après la cérémonie.</li>
              </ul>
            </div>
          </div>

          <button
            className="modal-cta-btn"
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Réserver un Essayage
          </button>
        </div>
      </div>
    </div>
  );
}
