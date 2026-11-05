export default function Prestations() {
  return (
    <section id="prestations" className="prestations">
      <div className="container">
        <div className="section-header">
          <p className="pretitle">Ce que nous offrons</p>
          <h2 className="section-title light">Nos Prestations</h2>
          <div className="diamonds-row" style={{ maxWidth: 240, margin: '0 auto' }}>
            <div className="d-line" />
            <div className="d-lg" /><div className="d-sm" /><div className="d-lg" />
            <div className="d-line r" />
          </div>
        </div>

        <div className="prest-grid">
          <div className="prest-card">
            <div className="prest-icon">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3 className="prest-title">Negafa Complète</h3>
            <p className="prest-desc">Accompagnement Negafa pour votre cérémonie de mariage. Habillage, coiffure, maquiage et bijoux traditionnels inclus. Une mise en beauté de bout en bout.</p>
            <span className="prest-tag">Sur devis</span>
          </div>

          <div className="prest-card">
            <div className="prest-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <h3 className="prest-title">Location de Robes</h3>
            <p className="prest-desc">Location de nos tenues de cérémonie haut de gamme : caftans, takchitas, karakous et robes de mariée. Chaque pièce est unique, brodée à la main par des artisans.</p>
            <span className="prest-tag">À partir de 150 €</span>
          </div>

          <div className="prest-card">
            <div className="prest-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3 className="prest-title">Essayage Privé</h3>
            <p className="prest-desc">Séance d'essayage exclusive dans un cadre intimiste. Conseils personnalisés, retouches et préparation le jour J pour que chaque détail soit parfait.</p>
            <span className="prest-tag">Sur rendez-vous</span>
          </div>
        </div>
      </div>
    </section>
  );
}
