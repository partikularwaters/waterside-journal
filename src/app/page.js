// src/app/page.js
export default function Home() {
  return (
    <>
      {/* First Series: The Priesthood of All Believers */}
      <div className="series">
        <div className="series__eyebrow">Serial</div>
        <h2 className="series__title">The Priesthood of All Believers</h2>
        <div className="series__count">5 Parts</div>

        <ul className="essay-list">
          <li className="essay-list__item">
            <span className="essay-list__num">I</span>
            <span className="essay-list__title">
              <a href="/poab/poab-misread-doctrine">
                Priesthood of All Believers: A Misread Doctrine?
              </a>
            </span>
            <span className="essay-list__status"></span>
          </li>
          
          <li className="essay-list__item">
            <span className="essay-list__num">II</span>
            <span className="essay-list__title essay-list__title--forthcoming">
              The Drama of Ascent
            </span>
            <span className="essay-list__status">Forthcoming</span>
          </li>
          
          <li className="essay-list__item">
            <span className="essay-list__num">III</span>
            <span className="essay-list__title essay-list__title--forthcoming">
              Christ the Perfect High Priest
            </span>
            <span className="essay-list__status">Forthcoming</span>
          </li>
          
          <li className="essay-list__item">
            <span className="essay-list__num">IV</span>
            <span className="essay-list__title essay-list__title--forthcoming">
              The Session, the Spirit, and the Saints
            </span>
            <span className="essay-list__status">Forthcoming</span>
          </li>
          
          <li className="essay-list__item">
            <span className="essay-list__num">V</span>
            <span className="essay-list__title essay-list__title--forthcoming">
              Priestly Privileges and Practices
            </span>
            <span className="essay-list__status">After August 2026</span>
          </li>
        </ul>
      </div>

      <hr className="home-divider" />
        
      {/* Second Series: Forthcoming */}
      <div className="series">
        <div className="series__eyebrow">Forthcoming Series</div>
        <h2 className="series__title" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
          The Spirit of Christ and the Sursum Corda
        </h2>
        <div className="series__count" style={{ marginTop: '0.5rem' }}>
          Expected Late 2026
        </div>
      </div>
        
      {/* Site Footer */}
      <footer className="site-footer" style={{ marginTop: '5rem', paddingTop: '2rem' }}>
        <p style={{ fontFamily: 'var(--sans)', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '60%', textAlign: 'left', lineHeight: '1.6' }}>
          <strong>Waterside.</strong> A Filipino confessional Baptist journal of theological essays, historical retrieval, and pastoral reflection —
          written for ordinary Filipino Christians who hunger for deeper roots beside the abundant waters of Christ.
        </p>
          
        <p className="copyright-notice">
          All original content is freely given and <a href="https://copy.church/free/" target="_blank" rel="noopener noreferrer">dedicated to the public domain.
          </a>
        </p>
      </footer>
    </>
  );
}