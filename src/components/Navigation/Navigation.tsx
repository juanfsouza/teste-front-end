import './Navigation.scss'

export const Navigation = () => {
  const categories = [
    'TODAS CATEGORIAS',
    'SUPERMERCADO',
    'LIVROS',
    'MODA',
    'LANÇAMENTOS',
    'OFERTAS DO DIA',
    'ASSINATURA',
  ]

  return (
    <nav className="navigation" aria-label="Navegação principal">
      <div className="navigation__container">
        <ul className="navigation__list">
          {categories.map((category, index) => (
            <li key={index} className="navigation__item">
              <a
                href="#"
                className={`navigation__link ${
                  category === 'OFERTAS DO DIA' ? 'navigation__link--active' : ''
                }`}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

