export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-header">
          <p className="pretitle">En toute simplicité</p>
          <h2 className="section-title">Comment ça se passe ?</h2>
          <div className="diamonds-row" style={{ maxWidth: 240, margin: '0 auto' }}>
            <div className="d-line" />
            <div className="d-lg" /><div className="d-sm" /><div className="d-lg" />
            <div className="d-line r" />
          </div>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="process-num">1</div>
            <h3>Prise de contact</h3>
            <p>Remplissez notre formulaire ou contactez-nous par WhatsApp. Nous vous répondons sous 24 heures pour convenir d'un rendez-vous.</p>
          </div>
          <div className="process-step">
            <div className="process-num">2</div>
            <h3>Essayage privé</h3>
            <p>Venez essayer les pièces qui vous font rêver lors d'une séance intime et personnalisée. Conseils et retouches inclus.</p>
          </div>
          <div className="process-step">
            <div className="process-num">3</div>
            <h3>Le Jour J</h3>
            <p>Votre tenue vous attend, prête à magnifier votre beauté. Notre équipe s'occupe de tout pour que ce moment soit inoubliable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
