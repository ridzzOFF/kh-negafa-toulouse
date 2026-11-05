'use client';

import { useState } from 'react';
import { PRODUCTS, Product } from '@/data/collection';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const FILTERS = [
  { key: 'all', label: 'Toutes les pièces' },
  { key: 'caftan', label: 'Caftans' },
  { key: 'takchita', label: 'Takchitas' },
  { key: 'karakou', label: 'Karakous' },
  { key: 'robe-mariee', label: 'Robes Mariée' },
];

export default function CollectionGrid() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<Product | null>(null);

  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  return (
    <>
      <section id="collection" className="collection">
        <div className="container">
          <div className="section-header">
            <p className="pretitle">Robes de Cérémonie</p>
            <h2 className="section-title">Notre Collection</h2>
            <div className="diamonds-row" style={{ maxWidth: 240, margin: '0 auto' }}>
              <div className="d-line" />
              <div className="d-lg" /><div className="d-sm" /><div className="d-lg" />
              <div className="d-line r" />
            </div>
            <p className="section-sub">Chaque pièce est unique, brodée à la main par nos artisans.</p>
          </div>

          <div id="filters" className="filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-btn${filter === f.key ? ' active' : ''}`}
                data-filter={f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div id="coll-grid" className="coll-grid">
            {list.length === 0 ? (
              <p style={{ gridColumn: '1/-1', textAlign: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'var(--dark-light)', fontStyle: 'italic', padding: '5rem 0' }}>
                Aucune création disponible dans cette catégorie.
              </p>
            ) : (
              list.map(p => (
                <ProductCard key={p.id} product={p} onOpen={setSelected} />
              ))
            )}
          </div>
        </div>
      </section>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
