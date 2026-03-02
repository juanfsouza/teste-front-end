import './Hero.scss'

export const Hero = () => {
  return (
    <section className="hero" aria-label="Promoção Black Friday">
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__title">Venha conhecer nossas promoções</p>
          <p className="hero__discount">
            <span className="hero__discount-number">50% Off</span>
            <span className="hero__discount-text">nos produtos</span>
          </p>
          <button className="hero__button">Ver produto</button>
        </div>
      </div>
    </section>
  )
}

