export default function SavoirFaire() {
  return (
    <section className="savoir-faire">
      <div className="sf-video-col">
        <div className="sf-static-img" />
        <div className="sf-overlay" />
      </div>
      <div className="sf-text-col">
        <p className="sf-pretitle">Artisanat d'Exception</p>
        <h2 className="sf-title">
          Un savoir-faire<br />
          transmis de <em>génération en génération</em>
        </h2>
        <div className="sf-ornament">
          <div className="sf-ornament-line" />
          <div className="sf-ornament-diamond" />
          <div className="sf-ornament-line" />
        </div>
        <p className="sf-body">
          Chaque tenue est une œuvre vivante : des semaines de broderies à la main, des centaines de perles cousues une à une, des tissus nobles sélectionnés au cœur des souks de Fès, d'Alger et de Tunis.
        </p>
        <div className="sf-details">
          <div className="sf-detail">
            <div className="sf-detail-dot" />
            <span>Broderies au fil d'or réalisées par des Maâlams certifiés</span>
          </div>
          <div className="sf-detail">
            <div className="sf-detail-dot" />
            <span>Tissus nobles : soie, velours, brocart, damas</span>
          </div>
          <div className="sf-detail">
            <div className="sf-detail-dot" />
            <span>Perlage cristal Swarovski &amp; pierres semi-précieuses</span>
          </div>
        </div>
        <a href="#collection" className="sf-cta">Voir la Collection</a>
      </div>
    </section>
  );
}
