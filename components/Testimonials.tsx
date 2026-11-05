const TESTIMONIALS = [
  {
    text: "Kheïra a su cerner mon style en quelques minutes. La takchita était absolument somptueuse, les broderies d'une finesse incroyable. Je me suis sentie vraiment reine le jour de mon mariage.",
    name: 'Yasmine B.',
    city: 'Toulouse',
    initials: 'YB',
  },
  {
    text: "Un service d'une professionnalité rare. Chaque détail était pensé, chaque pièce unique. Le caftan que j'ai porté était d'une beauté à couper le souffle. Merci infiniment !",
    name: 'Samira K.',
    city: 'Toulouse',
    initials: 'SK',
  },
  {
    text: "Je recommande K.H Négafa les yeux fermés. L'essayage s'est déroulé dans une ambiance chaleureuse et raffinée. Le karakou était exactement comme je l'imaginais, et même mieux.",
    name: 'Nadia M.',
    city: 'Blagnac',
    initials: 'NM',
  },
  {
    text: "Kheïra est une véritable artiste. Elle m'a guidée avec bienveillance pour choisir la robe parfaite. Le résultat était époustouflant. Toute ma famille était en larmes tellement c'était beau.",
    name: 'Leila H.',
    city: 'Colomiers',
    initials: 'LH',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="pretitle">Ce qu'elles disent</p>
          <h2 className="section-title light">Témoignages</h2>
          <div className="diamonds-row" style={{ maxWidth: 240, margin: '0 auto' }}>
            <div className="d-line" />
            <div className="d-lg" /><div className="d-sm" /><div className="d-lg" />
            <div className="d-line r" />
          </div>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card">
              <span className="testi-quote">&ldquo;</span>
              <p className="testi-text">{t.text}</p>
              <div className="testi-stars">★★★★★</div>
              <div className="testi-author">
                <div className="testi-initials">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-city">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
