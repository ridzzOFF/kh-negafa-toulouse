'use client';

import Image from 'next/image';
import { Product, CAT_LBL } from '@/data/collection';

interface Props {
  product: Product;
  onOpen: (p: Product) => void;
}

export default function ProductCard({ product: p, onOpen }: Props) {
  return (
    <article
      className="prod-card"
      tabIndex={0}
      role="button"
      aria-label={`Voir ${p.name}`}
      onClick={() => onOpen(p)}
      onKeyDown={e => e.key === 'Enter' && onOpen(p)}
    >
      <div className="prod-img">
        <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="(max-width:768px) 50vw, 25vw" />
        <div className="prod-overlay">
          <div className="prod-overlay-line" />
          <span>Voir Détails</span>
        </div>
        <span className="badge badge-cat">{CAT_LBL[p.cat]}</span>
        <span className={`badge ${p.ok ? 'badge-ok' : 'badge-no'}`}>{p.ok ? 'Disponible' : 'Réservée'}</span>
      </div>
      <div className="prod-info">
        <h3 className="prod-name">{p.name}</h3>
        <p className="prod-desc">{p.desc}</p>
        <div className="prod-sizes">
          {p.sizes.map(s => <span key={s} className="sz">{s}</span>)}
        </div>
      </div>
    </article>
  );
}
