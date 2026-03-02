import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">

        {/* Logo + descrição + redes sociais */}
        <div className="footer__section">
          <img src="/Logo.svg" alt="Econverse" className="footer__logo-img" />
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divisor vertical */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Institucional */}
        <div className="footer__section">
          <h4 className="footer__title">Institucional</h4>
          <nav className="footer__nav" aria-label="Links institucionais">
            <a href="#" className="footer__link">Sobre Nós</a>
            <a href="#" className="footer__link">Movimento</a>
            <a href="#" className="footer__link">Trabalhe conosco</a>
          </nav>
        </div>

        {/* Ajuda */}
        <div className="footer__section">
          <h4 className="footer__title">Ajuda</h4>
          <nav className="footer__nav" aria-label="Links de ajuda">
            <a href="#" className="footer__link">Suporte</a>
            <a href="#" className="footer__link">Fale Conosco</a>
            <a href="#" className="footer__link">Perguntas Frequentes</a>
          </nav>
        </div>

        {/* Termos */}
        <div className="footer__section">
          <h4 className="footer__title">Termos</h4>
          <nav className="footer__nav" aria-label="Links de termos">
            <a href="#" className="footer__link">Termos e Condições</a>
            <a href="#" className="footer__link">Política de Privacidade</a>
            <a href="#" className="footer__link">Troca e Devolução</a>
          </nav>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  )
}