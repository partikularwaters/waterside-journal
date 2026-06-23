// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Waterside",
  description: "A Filipino confessional Baptist journal of theological essays, historical retrieval, and pastoral reflection written for ordinary Filipino Christians who hunger for deeper roots beside the abundant waters of Christ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <div className="page">
          
          {/* AUTHENTIC SIDEBAR WRAPPER (Purely branding now — no links) */}
          <aside className="sidebar-container">
            <header className="masthead">
              <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '1rem' }}>
                <img src="/waterside-logo.svg" alt="Waterside Logo" className="masthead__logo" />
              </a>
              <p className="masthead__subtitle">
                Essays Beside Our Common Abundant Waters
              </p>
            </header>
          </aside>

          {/* CORE CONTENT LAYOUT STREAM (The link lives strictly here) */}
          <main className="archive">
            <nav className="site-nav">
                <a href="/" className="site-nav__logo" aria-label="Waterside Home">
                  <span className="logo-mask"></span>
                </a>
                <div className="site-nav__links">
                  <a href="/">Archive</a>
                  <a href="/about">About</a>
                </div>
            </nav>
            
            {children}

            <footer className="site-footer" style={{ marginTop: '5rem', paddingTop: '2rem' }}>
              <p style={{marginBottom: '1.5rem'}}>
                <strong>Waterside.</strong> A Filipino confessional Baptist journal of theological essays, historical retrieval, and pastoral reflection —
                written for ordinary Filipino Christians who hunger for deeper roots beside the abundant waters of Christ.
              </p>
                
              <p className="copyright-notice">
                All original content is freely given and <a href="https://copy.church/free/" target="_blank" rel="noopener noreferrer">dedicated to the public domain.</a>
              </p>
            </footer>
          </main>

        </div>
      </body>
    </html>
  );
}